import { faInstagram, faPinterestP, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { faBook, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addToFav } from '../redux/slices/Favourites'
import { addToCart, checkOut, decrementQ, incrementQ, removeBook } from '../redux/slices/CartSlice'
import { fetchBook } from '../redux/slices/bookSlice'
import { icon } from '@fortawesome/fontawesome-svg-core'

const Cart = () => {

    const [tp, setTp] = useState(0)

    const { allBooks, loading, errmsg } = useSelector(state => state.bookReducer)

    const nav = useNavigate()

    const fav = useSelector(state => state.favReducer)
    const cart = useSelector(state => state.cartReduce)



    // console.log(allBooks, loading, errmsg);

    const dispatch = useDispatch()

    const handleDec = (data) => {

        if (data.q == 1) {
            alert("Minimum 1 product required Or you could remove book")
        } else {
            dispatch(decrementQ(data))
        }

    }

    const checkOutt = () => {

        alert("Thankyou for Shopping")
        dispatch(checkOut())
        nav('/books')

    }


    useEffect(() => {

        if (cart.length > 0) {
            const totalP = parseFloat((cart.map(book => book.tp).reduce((a, b) => a + b)).toFixed(2))
            setTp(totalP)
        }


    }, [cart])


    useEffect(() => {
        dispatch(fetchBook())
    }, [])


    return (
        <div id='main' className=' h-auto pb-8'>
            <div className='w-full grid grid-cols-2'>
                <div className=' ps-5'>
                    <Link to={'/'}><img className='w-20' src="./images/logo.png" alt="" /></Link>
                </div>


                <div className=' flex items-center justify-end pe-5 text-2xl gap-5'>
                    <FontAwesomeIcon id='db' icon={faInstagram} />
                    <FontAwesomeIcon id='db' icon={faXTwitter} />
                    <FontAwesomeIcon id='db' icon={faPinterestP} />
                </div>
            </div>


            <div id='bod' className=' my-10 mx-10 rounded-2xl py-5'>
                <div className=' text-lg flex flex-wrap justify-center items-center gap-3 md:gap-10'>
                    <Link to={'/books'}><button className='but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faBook} /> Books</span></button></Link>
                    <Link to={'/fav'}><button className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faHeart} />Favourites</span><span id='dbb' className=' px-1.5 ms-1 rounded-2xl p-0.5 text-white text-sm'>{fav.length}</span></button></Link>
                    <button style={{ backgroundColor: "#dbb873" }} className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faCartShopping} />My Cart</span><span id='dbb' className=' px-1.5 ms-1 rounded-2xl p-0.5 text-white text-sm'>{cart.length}</span></button>
                </div>

                <div>

                    {
                        cart.length > 0 ?
                            <div className=' flex flex-col justify-center items-center text-amber-950'>
                                <div className='  grid sm:grid-cols-3 md:grid-cols-6 gap-5 sm:gap-8 md:gap-20 border-2 rounded p-5 mt-10'>
                                    <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-bold'>#</h1></div>
                                    <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-bold'>Name</h1></div>
                                    <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-bold'>Author</h1></div>
                                    <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-bold'>Total Price</h1></div>
                                    <div className=' flex text-center justify-center items-center'><h1 className=' px-5 mx-0.5 text-2xl font-bold'>Quantity</h1></div>
                                    <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-bold'><button>...</button></h1></div>
                                </div>
                                {
                                    cart.map((book, index) => (

                                        <div className=' grid sm:grid-cols-3 md:grid-cols-6 gap-5 sm:gap-8 md:gap-20 border rounded p-5 my-1 mx-2 md:mx-5'>
                                            <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-semibold'>{index + 1}</h1></div>
                                            <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-semibold'>{book.title}</h1></div>
                                            <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-semibold'>{book.author}</h1></div>
                                            <div className=' flex text-center justify-center items-center'><h1 className=' text-2xl font-semibold'>$ {book.tp}</h1></div>
                                            <div className=' flex text-center flex-wrap gap-3 justify-center items-center text-2xl font-semibold'>
                                                <button onClick={() => handleDec(book)} className=' border px-2 rounded'>-</button><span className=' border py-1 px-5 rounded'>{book.q}</span><button onClick={() => dispatch(incrementQ(book))} className='border px-2 rounded'>+</button></div>
                                            <div className=' flex text-center justify-center items-center'><button onClick={() => dispatch(removeBook(book.id))} className=' text-red-600 text-2xl font-semibold'><FontAwesomeIcon icon={faTrash} /></button></div>
                                        </div>

                                    ))
                                }
                                <div className=' flex justify-center items-center my-5'>
                                    <h1 className=' text-3xl font-bold text-amber-950'>Cart Total : ${tp}</h1>
                                </div>
                                <div className=' flex justify-center'>
                                    <button onClick={checkOutt} className=' p-2 bg-amber-950 rounded text-white'>Chech Out</button>
                                </div>
                            </div>

                            :
                            <div className=' h-full w-full flex flex-col flex-wrap p-5 justify-center items-center'>
                                <video autoPlay muted loop className='p-5 md:w-1/3' src="./images/em.mp4" alt="" />
                                <h1 id='pa' className=' text-center text-xl md:text-2xl'>Your Cart Is Empty</h1>
                            </div>

                    }

                </div>
            </div>
        </div>
    )
}

export default Cart
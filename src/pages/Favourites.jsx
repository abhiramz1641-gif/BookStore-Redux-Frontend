import { faInstagram, faPinterestP, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { faBook, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'
import { fetchBook } from '../redux/slices/bookSlice'
import { Link } from 'react-router-dom'
import { addToFav, removeFav } from '../redux/slices/Favourites'

const Favourites = () => {

    // const { allBooks, loading, errmsg } = useSelector(state => state.bookReducer)

    const fav = useSelector(state => state.favReducer)
    const cart = useSelector(state => state.cartReduce)


    // console.log(allBooks, loading, errmsg);

    const dispatch = useDispatch()


    const handleAddCart = (book) => {


        const existingBook = cart.find(item => item.id == book.id)

        if (existingBook) {
            alert("Book Quantity Incremented...")
        }
        else {
            alert("Book Added to Cart...")

        }
        dispatch(addToCart(book))

    }




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
                    <button style={{ backgroundColor: "#dbb873" }} className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faHeart} />Favourites</span><span id='dbb' className=' px-1.5 ms-1 rounded-2xl p-0.5 text-white text-sm'>{fav.length}</span></button>
                    <Link to={'/cart'}><button className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faCartShopping} />My Cart</span><span id='dbb' className=' px-1.5 ms-1 rounded-2xl p-0.5 text-white text-sm'>{cart.length}</span></button></Link>
                </div>

                <div>

                    {
                        fav.length > 0 ?
                            <div className=' my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 gap-10'>
                                {
                                    fav.map(book => (
                                        <div id='card' className=' h-full py-3 px-3 rounded-lg flex flex-col items-center'>
                                            <img id='he' className=' w-full h-60' src={book.cover} alt="" />
                                            <h1 id='he' className=' text-xl font-bold mt-3 text-center'>{book.title}</h1>
                                            <h2 id='pa' className=' text-lg font-semibold text-center'>{book.author}</h2>
                                            <h2 id='pa' className=' text-lg font-semibold text-center text-blue-900'>${book.price}</h2>
                                            <p id='pa' className=' text-center mt-2'>Genre : {book.genre}</p>
                                            <p id='pa' className=' text-center mt-1'>Rating : {book.rating} <FontAwesomeIcon icon={faStar} /></p>
                                            <p id='pa' className=' text-center mt-1'>Year : {book.year}</p>
                                            <div className=' flex flex-col justify-center items-center my-3'>
                                                <button onClick={() => handleAddCart(book)} style={{ backgroundColor: "#2C1810" }} className=' text-white mt-3 p-2 rounded'>Add to cart</button>
                                                <button onClick={() => dispatch(removeFav(book.id))} className='text-red-500 mt-3'><FontAwesomeIcon icon={faTrash} /></button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            :
                            <div className=' h-full w-full flex flex-col flex-wrap p-5 justify-center items-center'>
                                <img className='p-5 md:w-1/3' src="./images/ecart.gif" alt="" />
                                <h1 id='pa' className='text-center text-xl sm:text-2xl' >No Favourites...</h1>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Favourites
import { faInstagram, faPinterestP, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBook } from '../redux/slices/bookSlice'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { faBook, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { addToFav } from '../redux/slices/Favourites'
import { addToCart } from '../redux/slices/CartSlice'

const Books = () => {

    const { allBooks, loading, errmsg } = useSelector(state => state.bookReducer)

    const fav = useSelector(state => state.favReducer)
    const cart = useSelector(state => state.cartReduce)


    // console.log(allBooks, loading, errmsg);

    const dispatch = useDispatch()


    const handleAddBook = (book) => {

        const truth = fav.find(item => item.id == book.id)
        if (truth) {
            alert("Book already added")
        }
        else {
            alert("Book Added To Favourites...")
            dispatch(addToFav(book))

        }

    }

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


    useEffect(() => {
        dispatch(fetchBook())
    }, [])



    return (
        <div id='main' className=' h-auto pb-10'>
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
                    <button style={{ backgroundColor: "#dbb873" }} className=' px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faBook} /> Books</span></button>
                    <Link to={'/fav'}><button className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faHeart} />Favourites</span><span id='dbb' className=' px-1.5 ms-1 rounded-2xl p-0.5 text-white text-sm'>{fav.length}</span></button></Link>
                    <Link to={'/cart'}><button className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faCartShopping} />My Cart</span><span id='dbb' className=' px-1.5 ms-1 rounded-2xl p-0.5 text-white text-sm'>{cart.length}</span></button></Link>
                </div>

                <div>
                    <div className=' my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 gap-10'>
                        {allBooks &&

                            allBooks.length > 0 &&
                            allBooks.map(book => (
                                <div id='card' className=' h-full py-3 px-3 rounded-lg flex flex-col items-center'>
                                    <img id='he' className=' w-full h-60' src={book.cover} alt="" />
                                    <h1 id='he' className=' text-xl font-bold mt-3 text-center'>{book.title}</h1>
                                    <h2 id='pa' className=' text-lg font-semibold text-center'>{book.author}</h2>
                                    <h2 id='pa' className=' text-lg font-semibold text-center text-blue-900'>${book.price}</h2>
                                    <p id='pa' className=' text-center mt-2'>Genre : {book.genre}</p>
                                    <p id='pa' className=' text-center mt-1'>Rating : {book.rating} <FontAwesomeIcon icon={faStar} /></p>
                                    <p id='pa' className=' text-center mt-1'>Year : {book.year}</p>
                                    <div className=' flex flex-col justify-center items-center my-3'>
                                        <button onClick={() => handleAddBook(book)} className=' bg-red-600 rounded-xl px-2 py-2 text-white'>Add to favourites<FontAwesomeIcon icon={faHeart} /></button>
                                        <button onClick={() => handleAddCart(book)} style={{ backgroundColor: "#2C1810" }} className=' text-white mt-3 p-2 rounded'>Add to cart</button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    {
                        loading &&
                        <div className=' flex flex-col items-center justify-center w-full'>
                            <img className=' p-5 md:w-1/3' src="./images/cat.gif" alt="" />
                            <h1 id='pa' className=' text-center text-2xl'>Fetching...</h1>
                        </div>

                    }

                    {
                        errmsg &&
                        <div className=' flex flex-col items-center justify-center w-full'>
                            <img className=' p-5 md:w-1/3' src="./images/cat.gif" alt="" />
                            <h1 id='pa' className=' text-center text-2xl'>API Failed</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Books
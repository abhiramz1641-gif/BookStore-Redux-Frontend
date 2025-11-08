import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBook } from '../redux/slices/bookSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterestP, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faBook, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { motion } from "motion/react"

const Home = () => {

    const fav = useSelector(state => state.favReducer)
    const cart= useSelector(state => state.cartReduce)


    return (
        <div id='main' className=' h-auto pb-10 md:h-screen'>
            <div className='w-full grid grid-cols-2'>
                <div className=' ps-5'>
                    <img className='w-20' src="./images/logo.png" alt="" />
                </div>


                <div className=' flex items-center justify-end pe-5 text-2xl gap-5'>
                    <FontAwesomeIcon id='db' icon={faInstagram} />
                    <FontAwesomeIcon id='db' icon={faXTwitter} />
                    <FontAwesomeIcon id='db' icon={faPinterestP} />
                </div>
            </div>


            <motion.div initial={{ scale: 0 }} transition={{duration:.8}} animate={{ scale: 1}} id='bod' className=' my-10 mx-10 rounded-2xl py-5'>
                <div className=' text-lg flex flex-wrap justify-center items-center gap-3 md:gap-10'>
                    <Link to={'/books'}><button className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faBook} /> Books</span></button></Link>
                    <Link to={'/fav'}><button className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faHeart} />Favourites</span><span id='dbb' className=' px-1.5 ms-1 rounded-2xl p-0.5 text-white text-sm'>{fav.length}</span></button></Link>
                    <Link to={'/cart'}><button className=' but px-4 py-1 rounded-2xl'><span id='db' className=' font-semibold' ><FontAwesomeIcon icon={faCartShopping} />My Cart</span><span id='dbb' className=' px-1.5 ms-1 rounded-2xl p-0.5 text-white text-sm'>{cart.length}</span></button></Link>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-20 mx-5 px-10 justify-evenly items-center gap-2 lg:gap-5 text-wrap'>

                    <div className=' flex justify-center items-center flex-col p-2'>
                        <h1 id='he' className=' text-4xl sm:text-5xl font-semibold md:text-5xl lg:text-5xl xl:text-6xl text-justify mb-5'>New & <br />Trending</h1>
                        <p id='pa' className='text-sm md:text-lg'>Explore new worlds from authors</p>
                        <Link to={'/books'}><button style={{ background: "#daa63d" }} className=' my-5 px-5 py-1 rounded-lg'><span id='db' className='font-semibold text-xl' >Check It Out</span></button></Link>
                    </div>
                    <div className=' flex justify-center'>
                        <img className='p-5 md:w-full' src="./images/pom.jpg" alt="" />
                    </div>
                    <div id='card' className=' mx-8 flex flex-col items-center justify-center md:py-5 rounded-xl'>
                        <img className='w-2/3' src="./images/ah.png" alt="" />
                        <h1 id='he' className=' sm:text-md md:text-lg text-center mt-3 font-bold'>James Clear</h1>
                    </div>
                    <div id='card' className=' mx-8 flex flex-col items-center justify-center md:py-5 rounded-xl'>
                        <img className=' w-2/3' src="./images/hpp.jpg" alt="" />
                        <h1 id='he' className=' sm:text-md md:text-lg text-center mt-3 font-bold'>J.K Rowling</h1>
                    </div>

                </div>

            </motion.div>


        </div>
    )
}

export default Home
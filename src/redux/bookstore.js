import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './slices/bookSlice'
import FavouriteSlice from './slices/Favourites'
import CartSlice from './slices/CartSlice'



const Bookstore=configureStore({
    reducer:{
        bookReducer:bookSlice,
        favReducer:FavouriteSlice,
        cartReduce:CartSlice

    }
})

export default Bookstore
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchBook=createAsyncThunk("books/fetchBook",async()=>{
    const result=await axios.get("https://bookstore-redux-serverr.onrender.com/books")

    sessionStorage.setItem("allBooks",JSON.stringify(result.data))
    return result.data
})





const bookSklice=createSlice({
    name:"books",
    initialState:{
        allBooks:[],
        loading:"",
        errmsg:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBook.fulfilled,(state,apiResult)=>{
            state.allBooks=apiResult.payload
            state.loading=false
            state.errmsg=""
        })
        builder.addCase(fetchBook.pending,(state)=>{
            state.allBooks=[]
            state.loading=true
            state.errmsg=""
        })
        builder.addCase(fetchBook.rejected,(state)=>{
            state.allBooks=[]
            state.loading=false
            state.errmsg="API fetch failed"
        })
    }


})



export default bookSklice.reducer
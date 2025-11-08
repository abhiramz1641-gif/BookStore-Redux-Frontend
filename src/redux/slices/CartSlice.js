import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, dataFromComponent) => {

            const existingBook = state.find(book => book.id == dataFromComponent.payload.id)
            if (existingBook) {
                existingBook.q++
                existingBook.tp = parseFloat((existingBook.price * existingBook.q).toFixed(2))
                const remaininngBook = state.filter(book => book.id != existingBook.id)
                console.log(existingBook);
                state = [...remaininngBook, existingBook]
            }
            else {
                state.push({ ...dataFromComponent.payload, q: 1, tp: dataFromComponent.payload.price })

            }
        },
        incrementQ: (state, dataFromComponent) => {
            const existingBook = state.find(book => book.id == dataFromComponent.payload.id)
            existingBook.q++
            existingBook.tp = parseFloat((existingBook.price * existingBook.q).toFixed(2))
            const remaininngBook = state.filter(book => book.id != existingBook.id)
            console.log(existingBook);
            state = [...remaininngBook, existingBook]
        },
        decrementQ: (state, dataFromComponent) => {
            const existingBook = state.find(book => book.id == dataFromComponent.payload.id)
            existingBook.q--
            existingBook.tp = parseFloat((existingBook.price * existingBook.q).toFixed(2))
            const remaininngBook = state.filter(book => book.id != existingBook.id)
            console.log(existingBook);
            state = [...remaininngBook, existingBook]
        },
        removeBook:(state,dataFromComponent)=>{
            return state = state.filter(book => book.id != dataFromComponent.payload)
        },
        checkOut:(state)=>{
            const r=[]
            return state=[...r]
        }



    }
})

export const { addToCart,incrementQ,decrementQ,removeBook,checkOut } = CartSlice.actions

export default CartSlice.reducer
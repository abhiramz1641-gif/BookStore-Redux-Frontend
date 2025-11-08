import { createSlice } from "@reduxjs/toolkit";


const FavouriteSlice=createSlice({
    name:"favourite",
    initialState:[],
    reducers:{
        addToFav:(state,dataFromComponent)=>{

            state.push(dataFromComponent.payload)

        },
        removeFav:(state,dataFromComponent)=>{            
            return state=state.filter(item=>item.id!=dataFromComponent.payload)
        }
    }
})

export const {addToFav , removeFav}=FavouriteSlice.actions
export default FavouriteSlice.reducer
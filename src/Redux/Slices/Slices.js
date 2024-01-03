import { createSlice } from "@reduxjs/toolkit";


const ProductSlice  = createSlice({
    name: "Products",
    initialState: [],
    reducers: {
        addProduct: (state, action)=>{
             state.push(action.payload)
         // Alternatively, you can use the spread operator:- return [...state, action.payload];  this one also creates a new array with the old data.
            //  or return state.push(action.payload)- this one not create a new array
        },

     
   
    }
    
})


export const {addProduct} = ProductSlice.actions;

export default ProductSlice.reducer



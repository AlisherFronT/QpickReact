import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        productsInCart: []
    },
    reducers: {
        addProductInCart: (state, action) => {
            state.productsInCart.push(action.payload)
        },
        deleteProductInCart: (state, action) => {
            state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload)
        }
    }
});

export const  { addProductInCart, deleteProductInCart } = basketSlice.actions;
export default basketSlice.reducer;
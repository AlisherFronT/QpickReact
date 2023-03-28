import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        productsInCart: [],
        total: 0,
        quantity: 1
    },
     reducers: {
         addProductInCart: (state, action) => {
             const productToAdd = {...action.payload, quantity: 1};
             state.productsInCart.push(productToAdd);
             state.total += productToAdd.price;
         },
         deleteProductInCart: (state, action) => {
             state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload)
             state.total -= action.payload.price
         },
         increaseQuantity: (state, action) => {
             const product = state.productsInCart.find((product) => product.id === action.payload);
             if (product) {
                 product.quantity++;
                 state.total += product.price;
             }
         },
         decreaseQuantity: (state, action) => {
             const product = state.productsInCart.find((product) => product.id === action.payload)
             if (product && product.quantity > 1) {
                 product.quantity--;
                 state.total -= product.price;
             }
         },
         clearCart: (state, action) => {
             state.productsInCart = []
         }
     }
});

export const  { addProductInCart, deleteProductInCart, increaseQuantity, decreaseQuantity, clearCart } = basketSlice.actions;
export default basketSlice.reducer;
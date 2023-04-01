import {createSlice} from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        productsInFavorites: []
    },
    reducers: {
        addProductInFavorites: (state, action) => {
            state.productsInFavorites.push(action.payload)
        },
        removeProductInFavorites: (state, action) => {
            state.productsInFavorites = state.productsInFavorites.filter(product => product.id !== action.payload)
        },
        clearFavorites: (state, action) => {
            state.productsInFavorites = []
        }
    }
})

export const  {addProductInFavorites, removeProductInFavorites} = favoriteSlice.actions
export default  favoriteSlice.reducer
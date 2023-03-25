import {configureStore} from "@reduxjs/toolkit";
import user from "./reducers/user"
import basket from "./reducers/basket";
import favorites from "./reducers/favorites";


const store = configureStore({
    reducer: {
        user: user,
        basket: basket,
        favorites: favorites,
    }
})

export default store;

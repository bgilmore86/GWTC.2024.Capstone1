import { configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./api.js"
import cartReducer from './cartSlice';


export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartReducer
    },
    //add middleware code
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
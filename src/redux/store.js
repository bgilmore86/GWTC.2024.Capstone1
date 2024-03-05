import { configureStore} from "@reduxjs/toolkit";

import {apiSlice} from "./apiSlice.js"


export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    //add middleware code
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
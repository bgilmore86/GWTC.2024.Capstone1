import { configureStore} from "@reduxjs/toolkit";

//importing api
import {apiSlice} from "./api";

export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    //add middleware code
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
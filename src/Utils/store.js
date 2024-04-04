import { configureStore } from "@reduxjs/toolkit";
import  appReducer from "./appSlice";
import chatSlice from "./chatSlice";

const storee = configureStore({
    reducer: {
        app: appReducer,
        chat: chatSlice
    } 
})

export default storee;
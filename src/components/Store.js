import { configureStore } from "@reduxjs/toolkit";
import loremReducer from "./LoremSlice";
const Store=configureStore({
    reducer:{
        lorem:loremReducer,
    },
})

export default Store;
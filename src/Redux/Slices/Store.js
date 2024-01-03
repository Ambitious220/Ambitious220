import { configureStore } from "@reduxjs/toolkit";
import Slices from '../Slices/Slices.js';

export const Store = configureStore({
    reducer:{
        "Products":Slices
    }
})
import { configureStore } from "@reduxjs/toolkit";
import couterSlice from "../features/couterSlice";

export const store = configureStore({
    reducer: {
        counter : couterSlice
    }
})
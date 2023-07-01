import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    },
})
 


export default store;
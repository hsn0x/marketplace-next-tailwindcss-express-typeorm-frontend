import { combineReducers } from "@reduxjs/toolkit";
import marketReducer from "./marketReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    market: marketReducer,
    product: productReducer,
    user: userReducer,
    auth: authReducer,
    cart: cartReducer,
});

export default reducers;

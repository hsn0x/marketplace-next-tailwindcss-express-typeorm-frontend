import { combineReducers } from "@reduxjs/toolkit";
import market from "./market";
import product from "./product";
import user from "./user";
import auth from "./auth";
import cart from "./cart";

const reducers = combineReducers({
    market,
    product,
    user,
    auth,
    cart,
});

export default reducers;

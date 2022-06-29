import { combineReducers } from "@reduxjs/toolkit";
import market from "./markets";
import product from "./products";
import user from "./users";
import auth from "./auth";
import cart from "./carts";

const reducers = combineReducers({
    market,
    product,
    user,
    auth,
    cart,
});

export default reducers;

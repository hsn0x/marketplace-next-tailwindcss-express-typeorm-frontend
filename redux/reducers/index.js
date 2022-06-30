import { combineReducers } from "@reduxjs/toolkit";
import market from "./market";
import markets from "./markets";
import products from "./products";
import product from "./product";
import users from "./users";
import auth from "./auth";
import carts from "./carts";

const reducers = combineReducers({
    market,
    markets,
    product,
    products,
    users,
    auth,
    carts,
});

export default reducers;

import { combineReducers } from "@reduxjs/toolkit";
import markets from "./markets";
import products from "./products";
import product from "./product";
import users from "./users";
import auth from "./auth";
import carts from "./carts";

const reducers = combineReducers({
    markets,
    product,
    products,
    users,
    auth,
    carts,
});

export default reducers;

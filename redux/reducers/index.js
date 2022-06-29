import { combineReducers } from "@reduxjs/toolkit";
import markets from "./markets";
import products from "./products";
import users from "./users";
import auth from "./auth";
import carts from "./carts";

const reducers = combineReducers({
    markets,
    products,
    users,
    auth,
    carts,
});

export default reducers;

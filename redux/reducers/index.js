import { combineReducers } from "@reduxjs/toolkit";
import market from "./market";
import markets from "./markets";
import products from "./products";
import product from "./product";
import productCreate from "./productCreate";
import users from "./users";
import auth from "./auth";
import carts from "./carts";
import members from "./members";
import member from "./member";

const reducers = combineReducers({
    market,
    markets,
    product,
    productCreate,
    products,
    users,
    auth,
    carts,
    members,
    member,
});

export default reducers;

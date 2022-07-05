import { combineReducers } from "@reduxjs/toolkit";

import market from "./market";
import markets from "./markets";

import marketCreate from "./marketCreate";
import marketEdit from "./marketEdit";

import products from "./products";
import product from "./product";

import productCreate from "./productCreate";
import productEdit from "./productEdit";

import users from "./users";
import auth from "./auth";
import carts from "./carts";

import member from "./member";
import members from "./members";

import category from "./category";
import categories from "./categories";

const reducers = combineReducers({
    market,
    markets,

    marketCreate,
    marketEdit,

    productCreate,
    productEdit,

    product,
    products,

    users,
    auth,
    carts,

    members,
    member,

    categories,
    category,
});

export default reducers;

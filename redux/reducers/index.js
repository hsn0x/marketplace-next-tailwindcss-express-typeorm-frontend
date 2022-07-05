import { combineReducers } from "@reduxjs/toolkit";

import market from "./market";
import markets from "./markets";

import marketCreate from "./marketCreate";
import marketEdit from "./marketEdit";

import products from "./products";
import productsSearch from "./productsSearch";

import product from "./product";
import productCreate from "./productCreate";
import productEdit from "./productEdit";

import auth from "./auth";
import users from "./users";

import login from "./login";
import register from "./register";

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

    products,
    productsSearch,

    product,
    productCreate,
    productEdit,

    users,
    auth,

    login,
    register,

    carts,

    members,
    member,

    categories,
    category,
});

export default reducers;

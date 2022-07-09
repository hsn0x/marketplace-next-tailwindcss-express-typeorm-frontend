import { combineReducers } from "@reduxjs/toolkit";

import markets from "./markets";
import marketsSearch from "./marketsSearch";

import market from "./market";
import marketCreate from "./marketCreate";
import marketEdit from "./marketEdit";

import products from "./products";
import productsFilters from "./productsFilters";
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
import categoriesProduct from "./categoriesProduct";
import categoriesMarket from "./categoriesMarket";

import comments from "./comments";

const reducers = combineReducers({
    markets,
    marketsSearch,

    market,
    marketCreate,
    marketEdit,

    products,
    productsFilters,
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
    categoriesProduct,
    categoriesMarket,

    category,

    comments,
});

export default reducers;

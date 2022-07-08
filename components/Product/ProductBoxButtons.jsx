import React from "react";
import { Button } from "flowbite-react";
import { FaArrowUp, FaHeart, FaThumbsUp, FaCartPlus } from "react-icons/fa";
import ProductBoxButtonsVoteUp from "./ProductBoxButtonsVoteUp";
import ProductBoxButtonsLike from "./ProductBoxButtonsLike";
import ProductBoxButtonsFavorite from "./ProductBoxButtonsFavorite";
import ProductBoxButtonsAddToCart from "./ProductBoxButtonsAddToCart";

const ProductBoxButtons = ({ product }) => {
    return (
        <div className="flex gap-1">
            <div>
                <ProductBoxButtonsVoteUp />
            </div>
            <div>
                <ProductBoxButtonsLike product={product} />
            </div>
            <div>
                <ProductBoxButtonsFavorite />
            </div>
            <div>
                <ProductBoxButtonsAddToCart />
            </div>
        </div>
    );
};

export default ProductBoxButtons;

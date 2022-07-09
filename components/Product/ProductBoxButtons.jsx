import React from "react";
import { Button } from "flowbite-react";
import { FaArrowUp, FaHeart, FaThumbsUp, FaCartPlus } from "react-icons/fa";
import ProductBoxButtonsVoteUp from "./ProductBoxButtonsVoteUp";
import ProductBoxButtonsLike from "./ProductBoxButtonsLike";
import ProductBoxButtonsFavorite from "./ProductBoxButtonsFavorite";
import ProductBoxButtonsAddToCart from "./ProductBoxButtonsAddToCart";

const ProductBoxButtons = ({ product }) => {
    return (
        <div className="flex justify-between">
            <div>
                <ProductBoxButtonsVoteUp product={product} />
            </div>
            <div>
                <ProductBoxButtonsLike product={product} />
            </div>
            <div>
                <ProductBoxButtonsFavorite product={product} />
            </div>
            <div>
                <ProductBoxButtonsAddToCart />
            </div>
        </div>
    );
};

export default ProductBoxButtons;

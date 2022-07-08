import React from "react";
import { Button } from "flowbite-react";
import { FaArrowUp, FaHeart, FaThumbsUp, FaCartPlus } from "react-icons/fa";

const ProductBoxButtonsAddToCart = () => {
    return (
        <div>
            <Button pill={true} outline={true}>
                <div>
                    <FaCartPlus />
                </div>
            </Button>
        </div>
    );
};

export default ProductBoxButtonsAddToCart;

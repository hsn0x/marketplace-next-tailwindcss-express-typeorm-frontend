import React from "react";
import { Button } from "flowbite-react";
import { FaArrowUp, FaHeart, FaThumbsUp, FaCartPlus } from "react-icons/fa";

const ProductBoxButtonsFavorite = () => {
    return (
        <div>
            <Button pill={true} outline={true}>
                <div>
                    <FaHeart />
                </div>
            </Button>
        </div>
    );
};

export default ProductBoxButtonsFavorite;

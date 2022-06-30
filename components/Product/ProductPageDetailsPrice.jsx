import React from "react";

const ProductPageDetailsPrice = ({ price }) => {
    return (
        <div className="price flex">
            <div className="p-3 mr-2 bg-gray-50 border-2 rounded">
                <h5 className="text-2xl font-bold">{price} $</h5>
            </div>
            <div className="">
                <span className="text-lg text-green-400 font-bold">
                    Save 12%
                </span>
            </div>
        </div>
    );
};

export default ProductPageDetailsPrice;

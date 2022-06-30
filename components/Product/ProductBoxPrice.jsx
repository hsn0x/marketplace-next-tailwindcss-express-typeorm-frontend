import React from "react";

const ProductBoxPrice = ({ price }) => {
    return (
        <div>
            <h5 className="text-2xl font-bold ">{price}$</h5>
        </div>
    );
};

export default ProductBoxPrice;

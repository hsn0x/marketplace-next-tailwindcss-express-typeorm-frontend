import React from "react";
import ProductBox from "./ProductBox";

const ProductsBox = ({ products }) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {products.map((product) => (
                <div key={product.id} className="">
                    <ProductBox product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductsBox;

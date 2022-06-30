import React from "react";
import ProductBox from "../Product/ProductBox";

const ProductsBox = ({ products }) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            {products.map((product) => (
                <div key={product.id} className="">
                    <ProductBox product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductsBox;

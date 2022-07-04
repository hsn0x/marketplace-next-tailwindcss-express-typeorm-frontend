import { Card } from "flowbite-react";
import React from "react";
import ProductsBox from "../ProductsBox";

const ProductsMyPageContent = ({ products }) => {
    return (
        <div>
            {" "}
            <Card>
                <ProductsBox products={products} />
            </Card>
        </div>
    );
};

export default ProductsMyPageContent;

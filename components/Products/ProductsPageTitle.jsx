import { Card } from "flowbite-react";
import React from "react";
import ProductsPageTitleSearch from "./ProductsPageTitleSearch";

const ProductPageTitle = ({ title }) => {
    return (
        <div>
            <Card className="">
                <div className="flex justify-between">
                    <h2 className="text-4xl">{title}</h2>

                    <ProductsPageTitleSearch />
                    <div></div>
                </div>
            </Card>
        </div>
    );
};

export default ProductPageTitle;

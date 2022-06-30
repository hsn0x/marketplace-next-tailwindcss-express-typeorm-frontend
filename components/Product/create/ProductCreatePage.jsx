import React from "react";
import ProductCreatePageContent from "./ProductCreatePageContent";
import ProductCreatePageTitle from "./ProductCreatePageTitle";

const ProductCreatePage = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <ProductCreatePageTitle />
                <ProductCreatePageContent />
            </div>
        </div>
    );
};

export default ProductCreatePage;

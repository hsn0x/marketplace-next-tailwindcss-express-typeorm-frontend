import React from "react";
import ProductEditPageContent from "./ProductEditPageContent";
import ProductEditPageTitle from "./ProductEditPageTitle";

const ProductEditPage = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <ProductEditPageTitle />
                <ProductEditPageContent />
            </div>
        </div>
    );
};

export default ProductEditPage;

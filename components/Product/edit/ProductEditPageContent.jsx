import React from "react";
import {
    Button,
    Card,
    Checkbox,
    FileInput,
    Label,
    Select,
    TextInput,
} from "flowbite-react";
import ProductEditPageContentInformations from "./ProductEditPageContentInformations";
import ProductEditPageContentSubmit from "./ProductEditPageContentSubmit";
import ProductEditPageContentCategory from "./ProductEditPageContentCategory";
import ProductEditPageContentStore from "./ProductEditPageContentStore";
import ProductEditPageContentMedia from "./ProductEditPageContentMedia";

const ProductEditPageContent = () => {
    return (
        <div>
            <div>
                <form className="flex flex-row gap-1">
                    <div className="flex flex-col gap-1 w-full">
                        <ProductEditPageContentInformations />
                        <ProductEditPageContentSubmit />
                    </div>
                    <div className="flex flex-col gap-1 w-full ">
                        <ProductEditPageContentCategory />
                        <ProductEditPageContentStore />
                        <ProductEditPageContentMedia />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductEditPageContent;

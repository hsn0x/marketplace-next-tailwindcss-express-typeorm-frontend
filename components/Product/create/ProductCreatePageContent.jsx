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
import ProductCreatePageContentInformations from "./ProductCreatePageContentInformations";
import ProductCreatePageContentSubmit from "./ProductCreatePageContentSubmit";
import ProductCreatePageContentCategory from "./ProductCreatePageContentCategory";
import ProductCreatePageContentStore from "./ProductCreatePageContentStore";
import ProductCreatePageContentMedia from "./ProductCreatePageContentMedia";

const ProductCreatePageContent = () => {
    return (
        <div>
            <div>
                <form className="flex flex-row gap-1">
                    <div className="flex flex-col gap-1 w-full">
                        <ProductCreatePageContentInformations />
                        <ProductCreatePageContentSubmit />
                    </div>
                    <div className="flex flex-col gap-1 w-full ">
                        <ProductCreatePageContentCategory />
                        <ProductCreatePageContentStore />
                        <ProductCreatePageContentMedia />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductCreatePageContent;

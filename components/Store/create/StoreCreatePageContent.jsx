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
import StoreCreatePageContentInformations from "./StoreCreatePageContentInformations";
import StoreCreatePageContentSubmit from "./StoreCreatePageContentSubmit";
import StoreCreatePageContentCategory from "./StoreCreatePageContentCategory";
import StoreCreatePageContentStore from "./StoreCreatePageContentStore";
import StoreCreatePageContentMedia from "./StoreCreatePageContentMedia";

const StoreCreatePageContent = () => {
    return (
        <div>
            <div>
                <form className="flex flex-row gap-1">
                    <div className="flex flex-col gap-1 w-full">
                        <StoreCreatePageContentInformations />
                    </div>
                    <div className="flex flex-col gap-1 w-full ">
                        <StoreCreatePageContentCategory />
                        <StoreCreatePageContentMedia />
                        <StoreCreatePageContentSubmit />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StoreCreatePageContent;

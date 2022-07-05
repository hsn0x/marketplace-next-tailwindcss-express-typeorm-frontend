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
import StoreEditPageContentInformations from "./StoreEditPageContentInformations";
import StoreEditPageContentSubmit from "./StoreEditPageContentSubmit";
import StoreEditPageContentCategory from "./StoreEditPageContentCategory";
import StoreEditPageContentStore from "./StoreEditPageContentStore";
import StoreEditPageContentMedia from "./StoreEditPageContentMedia";

const StoreEditPageContent = () => {
    return (
        <div>
            <div>
                <form className="flex flex-row gap-1">
                    <div className="flex flex-col gap-1 w-full">
                        <StoreEditPageContentInformations />
                        <StoreEditPageContentSubmit />
                    </div>
                    <div className="flex flex-col gap-1 w-full ">
                        <StoreEditPageContentCategory />
                        <StoreEditPageContentMedia />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StoreEditPageContent;

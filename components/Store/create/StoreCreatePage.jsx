import React from "react";
import StoreCreatePageContent from "./StoreCreatePageContent";
import StoreCreatePageTitle from "./StoreCreatePageTitle";

const StoreCreatePage = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <StoreCreatePageTitle />
                <StoreCreatePageContent />
            </div>
        </div>
    );
};

export default StoreCreatePage;

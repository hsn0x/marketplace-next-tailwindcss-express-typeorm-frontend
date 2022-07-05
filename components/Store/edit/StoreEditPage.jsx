import React from "react";
import StoreEditPageContent from "./StoreEditPageContent";
import StoreEditPageTitle from "./StoreEditPageTitle";

const StoreEditPage = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <StoreEditPageTitle />
                <StoreEditPageContent />
            </div>
        </div>
    );
};

export default StoreEditPage;

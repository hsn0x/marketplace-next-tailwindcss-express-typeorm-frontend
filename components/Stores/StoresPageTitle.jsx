import { Card } from "flowbite-react";
import React from "react";
import StoresPageTitleSearch from "./StoresPageTitleSearch";

const StorePageTitle = ({ title }) => {
    return (
        <div className="mb-2">
            <Card className="">
                <div className="flex justify-between">
                    <h2 className="text-4xl">{title}</h2>

                    <StoresPageTitleSearch />
                    <div></div>
                </div>
            </Card>
        </div>
    );
};

export default StorePageTitle;

import { Card } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const StoreEditPageTitle = () => {
    return (
        <div>
            <Card>
                <h5 className="font-underline text-2xl font-bold">
                    Edit Store
                </h5>
                <div>
                    <h5 className="font-underline font-bold tracking-tight text-gray-900 dark:text-white">
                        Fill Store Informations
                    </h5>
                </div>
            </Card>
        </div>
    );
};

export default StoreEditPageTitle;

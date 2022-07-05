import { Card } from "flowbite-react";
import React from "react";

const StoreCreatePageTitle = () => {
    return (
        <div>
            <Card>
                <h5 className="font-underline text-2xl font-bold">
                    Create Store
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

export default StoreCreatePageTitle;

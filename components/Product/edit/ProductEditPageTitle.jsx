import { Card } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const ProductEditPageTitle = () => {
    return (
        <div>
            <Card>
                <h5 className="font-underline text-2xl font-bold">
                    Edit Product
                </h5>
                <div>
                    <h5 className="font-underline font-bold tracking-tight text-gray-900 dark:text-white">
                        Fill Product Informations
                    </h5>
                </div>
            </Card>
        </div>
    );
};

export default ProductEditPageTitle;

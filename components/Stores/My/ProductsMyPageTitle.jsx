import { Card } from "flowbite-react";
import React from "react";

const StoresMyPageTitle = ({ title }) => {
    return (
        <div>
            <div className="mb-2">
                <Card className="">
                    <h2 className="text-4xl">{title}</h2>
                </Card>
            </div>
        </div>
    );
};

export default StoresMyPageTitle;

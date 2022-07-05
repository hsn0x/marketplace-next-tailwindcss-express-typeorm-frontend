import { Card } from "flowbite-react";
import React from "react";
import StoresBox from "../StoresBox";

const StoresMyPageContent = ({ markets }) => {
    return (
        <div>
            {" "}
            <Card>
                <StoresBox markets={markets} />
            </Card>
        </div>
    );
};

export default StoresMyPageContent;

import React from "react";
import { Button } from "flowbite-react";
import { FaArrowUp } from "react-icons/fa";

const ProductBoxButtonsVoteUp = () => {
    return (
        <div>
            <Button pill={true} outline={true}>
                <div>
                    <FaArrowUp />
                </div>
            </Button>
        </div>
    );
};

export default ProductBoxButtonsVoteUp;

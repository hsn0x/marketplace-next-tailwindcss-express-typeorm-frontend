import { Button, TextInput } from "flowbite-react";
import React from "react";

const ProductPageDetailsAction = () => {
    return (
        <div>
            <div className="flex">
                <div className="mr-2 w-32">
                    <TextInput
                        id="quntity"
                        type="number"
                        placeholder="Quntity"
                        required={true}
                    />
                </div>
                <div className="">
                    <Button gradientMonochrome="info">Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductPageDetailsAction;

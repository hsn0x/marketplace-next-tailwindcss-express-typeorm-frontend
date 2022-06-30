import { Button, Card, Checkbox, Label } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productCreateActions } from "../../../redux/actions";

const ProductCreatePageContentSubmit = () => {
    const dispatch = useDispatch();

    const {
        productCreateUpdateTitle,
        productCreateUpdateDescription,
        productCreateUpdatePrice,
        productCreateUpdateQuantity,
    } = bindActionCreators(productCreateActions, dispatch);
    return (
        <div>
            {" "}
            <div className="">
                <Card>
                    <div className="flex flex-col gap-4" id="checkbox">
                        <h2 className="text-lg font-bold underline">Submit</h2>
                        <div className="flex items-center gap-2">
                            <Checkbox id="accept" defaultChecked={true} />
                            <Label htmlFor="accept">
                                I agree to the{" "}
                                <a
                                    href="/forms"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    terms and conditions
                                </a>
                            </Label>
                        </div>
                    </div>

                    <Button gradientMonochrome="info">Create Product</Button>
                </Card>
            </div>
        </div>
    );
};

export default ProductCreatePageContentSubmit;

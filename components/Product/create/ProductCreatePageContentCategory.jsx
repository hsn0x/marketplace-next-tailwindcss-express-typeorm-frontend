import { Card, Label, Select } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productCreateActions } from "../../../redux/actions";

const ProductCreatePageContentCategory = () => {
    const dispatch = useDispatch();

    const { productCreateUpdateCategory } = bindActionCreators(
        productCreateActions,
        dispatch
    );
    return (
        <div>
            <div className="">
                <Card>
                    <div>
                        <h2 className="text-lg font-bold underline">
                            Category
                        </h2>
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Select Category" />
                        </div>
                        <Select
                            id="category"
                            required={true}
                            onChange={(e) =>
                                productCreateUpdateCategory(e.target.value)
                            }
                        >
                            <option>Men Fashion</option>
                            <option>Technology</option>
                            <option>Sport</option>
                            <option>Gaming</option>
                        </Select>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProductCreatePageContentCategory;

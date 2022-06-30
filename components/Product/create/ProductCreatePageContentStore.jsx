import { Card, Label, Select } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productCreateActions } from "../../../redux/actions";

const ProductCreatePageContentStore = () => {
    const dispatch = useDispatch();

    const { productCreateUpdateStore } = bindActionCreators(
        productCreateActions,
        dispatch
    );
    return (
        <div>
            {" "}
            <div className="">
                <Card>
                    <div>
                        <h2 className="text-lg font-bold underline">Store</h2>
                        <div className="mb-2 block">
                            <Label htmlFor="store" value="Select Store" />
                        </div>
                        <Select
                            id="store"
                            required={true}
                            onChange={(e) =>
                                productCreateUpdateStore(e.target.value)
                            }
                        >
                            <option>Best Shop</option>
                            <option>Techno 18</option>
                            <option>Games Store</option>
                            <option>Luxe Store</option>
                        </Select>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProductCreatePageContentStore;

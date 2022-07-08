import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productsFiltersActions } from "../../redux/actions";

const ProductsPageFiltersPrice = () => {
    const dispatch = useDispatch();

    const { productsFiltersUpdateMaxPrice, productsFiltersUpdateMinPrice } =
        bindActionCreators(productsFiltersActions, dispatch);
    return (
        <div className="flex gap-1">
            <div>
                <div>
                    <Label htmlFor="min-price" value="Min Price" />
                </div>
                <div>
                    <TextInput
                        onChange={(event) =>
                            productsFiltersUpdateMinPrice(event.target.value)
                        }
                        id="min-price"
                        type="number"
                        placeholder="Min Price"
                    />
                </div>
            </div>
            <div>
                <div>
                    <Label htmlFor="max-price" value="Max Price" />
                </div>
                <div>
                    <TextInput
                        onChange={(event) =>
                            productsFiltersUpdateMaxPrice(event.target.value)
                        }
                        id="max-price"
                        type="number"
                        placeholder="Max Price"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductsPageFiltersPrice;

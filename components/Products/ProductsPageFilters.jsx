import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import ProductsPageFiltersCategoriesSelect from "./ProductsPageFiltersCategoriesSelect";
import { axiosServer } from "../../db/axios";
import {
    categoriesActions,
    categoriesProductActions,
    productsFiltersActions,
} from "../../redux/actions";
import { getError } from "../../utils/error";
import ProductsPageFiltersPrice from "./ProductsPageFiltersPrice";
import ProductsPageFiltersSubmit from "./ProductsPageFiltersSubmit";

const ProductsPageFilters = () => {
    useEffect(() => {}, []);

    const handleFilterSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Card>
                <div>
                    <form onSubmit={() => handleFilterSubmit(e)}>
                        <div className="flex flex-row gap-1">
                            <div>
                                <ProductsPageFiltersCategoriesSelect />
                            </div>
                            <div>
                                <ProductsPageFiltersPrice />
                            </div>
                            <div className="">
                                <ProductsPageFiltersSubmit />
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default ProductsPageFilters;

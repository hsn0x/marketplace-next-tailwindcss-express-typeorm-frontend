import { Card, Label, Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { axiosServer } from "../../../db/axios";
import {
    categoriesActions,
    productCreateActions,
} from "../../../redux/actions";
import { getError } from "../../../utils/error";

const ProductCreatePageContentCategory = () => {
    const dispatch = useDispatch();
    const [categorySelected, setCategorySelected] = useState(0);
    const [categorySubSelected, setCategoryRootSubSelected] = useState(0);
    const [categorySubSubSelected, setCategoryRootSubSubSelected] = useState(0);
    const { categories, loading } = useSelector(({ categories }) => categories);

    const {
        categoriesFetchFail,
        categoriesFetchRequest,
        categoriesFetchSuccess,
    } = bindActionCreators(categoriesActions, dispatch);

    const { productCreateUpdateCategory } = bindActionCreators(
        productCreateActions,
        dispatch
    );

    const handleCategoriesRoot = (categories) => {
        return categories.filter((category) => category.parentId === 0);
    };
    const handleCategoriesRootSub = (parentId) => {
        return parentId != 0
            ? categories.filter((category) => category.parentId === parentId)
            : [];
    };
    const handleCategoriesRootSubSub = (parentId) => {
        return parentId != 0
            ? categories.filter((category) => category.parentId === parentId)
            : [];
    };

    const categoriesRoot = handleCategoriesRoot(categories);
    const categoriesRootSub = handleCategoriesRootSub(
        parseInt(categorySelected)
    );
    const categoriesRootSubSub = handleCategoriesRootSubSub(
        parseInt(categorySubSelected)
    );
    // const categoriesRootSubSub = handleCategoriesRootSub(categoriesRootSub);

    const CategoriesSelect = ({
        categoriesRoot,
        categoriesRootSub,
        categoriesRootSubSub,
    }) => {
        return (
            <div>
                <div>
                    {categoriesRoot && (
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="category"
                                    value="Select Category"
                                />
                            </div>
                            <Select
                                id="category"
                                required={true}
                                onChange={(e) =>
                                    setCategorySelected(e.target.value)
                                }
                                value={categorySelected}
                            >
                                {categoriesRoot &&
                                    categoriesRoot.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                            </Select>
                        </div>
                    )}
                    {categoriesRootSub.length > 0 && (
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="category"
                                    value="Select Category"
                                />
                            </div>
                            <Select
                                id="category"
                                required={true}
                                onChange={(e) =>
                                    setCategoryRootSubSelected(e.target.value)
                                }
                                value={categorySubSelected}
                            >
                                {categoriesRootSub &&
                                    categoriesRootSub.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                            </Select>
                        </div>
                    )}
                    {categoriesRootSubSub.length > 0 && (
                        <div>
                            {" "}
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="category"
                                    value="Select Category"
                                />
                            </div>{" "}
                            <Select
                                id="category"
                                required={true}
                                onChange={(e) =>
                                    setCategoryRootSubSubSelected(
                                        e.target.value
                                    )
                                }
                                value={categorySubSubSelected}
                            >
                                {categoriesRootSubSub.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    useEffect(() => {
        const fetchCategories = async () => {
            categoriesFetchRequest();
            try {
                const { data } = await axiosServer.get("/categories");
                categoriesFetchSuccess(data.categories);
            } catch (error) {
                categoriesFetchFail(getError(error));
            }
        };
        fetchCategories();
    }, []);

    return (
        <div>
            <div className="">
                <Card>
                    <div>
                        <h2 className="text-lg font-bold underline">
                            Category
                        </h2>
                    </div>
                    <CategoriesSelect
                        categoriesRoot={categoriesRoot}
                        categoriesRootSub={categoriesRootSub}
                        categoriesRootSubSub={categoriesRootSubSub}
                    />
                </Card>
            </div>
        </div>
    );
};

export default ProductCreatePageContentCategory;

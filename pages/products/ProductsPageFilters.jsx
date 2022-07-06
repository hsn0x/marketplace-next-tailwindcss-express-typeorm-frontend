import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { handleCategoriesTree } from "../../lib/handleCategoriesTree";
import { categoriesProductActions } from "../../redux/actions";
import { getError } from "../../utils/error";

const ProductsPageFilters = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const auth = useSelector(({ auth }) => auth);
    const { categoriesProduct } = useSelector(
        ({ categoriesProduct }) => categoriesProduct
    );

    const isHandleCategoriesProductTree =
        handleCategoriesTree(categoriesProduct);

    const {
        categoriesProductFetchFail,
        categoriesProductFetchRequest,
        categoriesProductFetchSuccess,
    } = bindActionCreators(categoriesProductActions, dispatch);

    useEffect(() => {
        if (auth.user && auth.isAuthenticated && !auth.profile) {
            dispatch(fetchProfile());
        }
        const fetchCategoriesProduct = async () => {
            categoriesProductFetchRequest();
            try {
                const { data } = await axiosServer.get(
                    "/categories/type/product"
                );
                categoriesProductFetchSuccess(data.categories);
            } catch (error) {
                categoriesProductFetchFail(getError(error));
            }
        };
        fetchCategoriesProduct();
    }, [auth.user, dispatch, auth.isAuthenticated, auth.profile]);

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
                                <div>
                                    <Label
                                        htmlFor="parent-categories"
                                        value="Category"
                                    />
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-36">
                                        <Select
                                            id="category"
                                            placeholder="Select Category"
                                            onChange={(e) =>
                                                handleCategorySelected(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                        </Select>
                                    </div>
                                    <div className="w-36">
                                        <Select
                                            id="category"
                                            placeholder="Select Category"
                                            onChange={(e) =>
                                                handleCategorySelected(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                        </Select>
                                    </div>
                                    <div className="w-36">
                                        <Select
                                            id="category"
                                            placeholder="Select Category"
                                            onChange={(e) =>
                                                handleCategorySelected(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                            <option>Select Category</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Label
                                        htmlFor="min-price"
                                        value="Min Price"
                                    />
                                </div>
                                <div>
                                    <TextInput
                                        onChange={(event) =>
                                            updateMinPrice(event.target.value)
                                        }
                                        id="min-price"
                                        type="number"
                                        placeholder="Min Price"
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Label
                                        htmlFor="max-price"
                                        value="Max Price"
                                    />
                                </div>
                                <div>
                                    <TextInput
                                        onChange={(event) =>
                                            updateMaxPrice(event.target.value)
                                        }
                                        id="max-price"
                                        type="number"
                                        placeholder="Max Price"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <Label
                                        htmlFor="parent-categories"
                                        value="Filter"
                                    />
                                </div>
                                <Button type="submit">Filter</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default ProductsPageFilters;

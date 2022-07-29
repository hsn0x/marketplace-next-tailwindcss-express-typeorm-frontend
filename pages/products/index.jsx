import React, { useEffect, useRef } from "react";
import axios from "axios";
import { axiosServer } from "../../db/axios";
import { useDispatch, useSelector } from "react-redux";
import { categoriesProductActions, productsActions } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { getError } from "../../utils/error";
import { Card, Carousel, Pagination, Spinner } from "flowbite-react";
import Link from "next/link";
import ProductBox from "../../components/Product/ProductBox";
import ProductsPageTitle from "../../components/Products/ProductsPageTitle";
import ProductsPageLoading from "../../components/Products/ProductsPageLoading";
import { notRequireAuthentication } from "../../HOC/notRequireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../redux/actions/auth";
import ProductsBox from "../../components/Products/ProductsBox";
import ProductsPageFilters from "../../components/Products/ProductsPageFilters";
import ProductsPagination from "../../components/Products/ProductsPagination";

const Products = ({ authUser }) => {
    const dispatch = useDispatch();

    const products = useSelector(({ products }) => products);
    const productsSearch = useSelector(({ productsSearch }) => productsSearch);
    const productsFilters = useSelector(
        ({ productsFilters }) => productsFilters
    );

    const { productsFetchFail, productsFetchRequest, productsFetchSuccess } =
        bindActionCreators(productsActions, dispatch);
    const {
        categoriesProductFetchFail,
        categoriesProductFetchRequest,
        categoriesProductFetchSuccess,
    } = bindActionCreators(categoriesProductActions, dispatch);

    useEffect(() => {
        dispatch(updateAuth(authUser));
        dispatch(updateIsAuthenticated(!!authUser));

        const fetchProducts = async () => {
            productsFetchRequest();
            try {
                const params = {
                    page: products.currentPage,
                    size: 21,
                };
                const { data } = await axiosServer.get("/products", {
                    params,
                });
                console.log(data);
                productsFetchSuccess(data);
            } catch (error) {
                productsFetchFail(getError(error));
            }
        };
        fetchProducts();

        const fetchCategoriesProduct = async () => {
            categoriesProductFetchRequest();
            try {
                const { data } = await axiosServer.get(
                    "/categories/type/product",
                    { params }
                );
                categoriesProductFetchSuccess(data.rows);
            } catch (error) {
                categoriesProductFetchFail(getError(error));
            }
        };
        fetchCategoriesProduct();
    }, []);

    return (
        <div className="flex flex-col gap-1">
            <div>
                <ProductsPageLoading loading={products.loading} />
            </div>
            <div>
                <ProductsPageTitle title="All Products" />
            </div>
            <div>
                <ProductsPageFilters title="All Products" />
            </div>
            <div>
                <ProductsPagination
                    totalItems={products.totalItems}
                    totalPages={products.totalPages}
                    currentPage={products.currentPage}
                />
            </div>
            <div>
                {productsSearch && productsSearch.length > 0 ? (
                    <ProductsBox products={productsSearch.rows} />
                ) : productsFilters && productsFilters.length > 0 ? (
                    <ProductsBox products={productsFilters.rows} />
                ) : (
                    <ProductsBox products={products.rows} />
                )}
            </div>
            <div>
                <ProductsPagination
                    totalItems={products.totalItems}
                    totalPages={products.totalPages}
                    currentPage={products.currentPage}
                />
            </div>
        </div>
    );
};

export const getServerSideProps = notRequireAuthentication((context) => {
    return {};
});

export default Products;

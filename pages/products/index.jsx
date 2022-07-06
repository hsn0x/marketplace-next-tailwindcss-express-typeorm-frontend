import React, { useEffect, useRef } from "react";
import axios from "axios";
import { axiosServer } from "../../db/axios";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { getError } from "../../utils/error";
import { Card, Carousel, Spinner } from "flowbite-react";
import Link from "next/link";
import ProductBox from "../../components/Product/ProductBox";
import ProductsPageTitle from "../../components/Products/ProductsPageTitle";
import ProductPageLoading from "../../components/Products/ProductsPageLoading";
import { notRequireAuthentication } from "../../HOC/notRequireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../redux/actions/auth";
import ProductsBox from "../../components/Products/ProductsBox";
import ProductsPageFilters from "./ProductsPageFilters";

const Products = ({ authUser }) => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(({ products }) => products);
    const {
        products: searchProducts,
        query,
        loading: searchLoading,
    } = useSelector(({ productsSearch }) => productsSearch);

    const { productsFetchFail, productsFetchRequest, productsFetchSuccess } =
        bindActionCreators(productsActions, dispatch);

    useEffect(() => {
        dispatch(updateAuth(authUser));
        dispatch(updateIsAuthenticated(!!authUser));
        const fetchProducts = async () => {
            productsFetchRequest();
            try {
                const { data } = await axiosServer.get("/products");
                productsFetchSuccess(data.products);
            } catch (error) {
                productsFetchFail(getError(error));
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="flex flex-col gap-1">
            <div>
                <ProductPageLoading loading={loading} />
            </div>
            <div>
                <ProductsPageTitle title="All Products" />
            </div>
            <div>
                <ProductsPageFilters title="All Products" />
            </div>
            <div>
                {searchProducts && searchProducts.length > 0 ? (
                    <ProductsBox products={searchProducts} />
                ) : (
                    <ProductsBox products={products} />
                )}
            </div>
        </div>
    );
};

export const getServerSideProps = notRequireAuthentication((context) => {
    return {};
});

export default Products;

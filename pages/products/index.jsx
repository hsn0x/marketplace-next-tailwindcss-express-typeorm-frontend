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
import ProductPageTitle from "../../components/Products/ProductsPageTitle";
import ProductPageLoading from "../../components/Products/ProductsPageLoading";
import { notRequireAuthentication } from "../../HOC/notRequireAuthentication";
import { updateAuth } from "../../redux/actions/auth";
import ProductsBox from "../../components/Products/ProductsBox";

const Products = ({ authUser }) => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(({ products }) => products);

    const { productsFetchFail, productsFetchRequest, productsFetchSuccess } =
        bindActionCreators(productsActions, dispatch);

    useEffect(() => {
        dispatch(updateAuth(authUser));
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
        <div>
            <ProductPageLoading loading={loading} />
            <ProductPageTitle title="All Products" />
            <ProductsBox products={products} />
        </div>
    );
};

export const getServerSideProps = notRequireAuthentication((context) => {
    return {};
});

export default Products;

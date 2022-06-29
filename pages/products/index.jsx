import React, { useEffect } from "react";
import axios from "axios";
import { axiosServer } from "../../db/axios";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { getError } from "../../utils/error";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(({ products }) => products);
    console.log({ products });
    const { productsFetchFail, productsFetchRequest, productsFetchSuccess } =
        bindActionCreators(productsActions, dispatch);

    useEffect(() => {
        const fetchProducts = async () => {
            productsFetchRequest();

            try {
                const { data: products } = await axiosServer.get("/products");
                productsFetchSuccess(products);
            } catch (error) {
                productsFetchFail(getError(error));
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>s</h1>
        </div>
    );
};

export const getServerSideProps = async () => {
    return {
        props: {},
    };
};

export default Products;

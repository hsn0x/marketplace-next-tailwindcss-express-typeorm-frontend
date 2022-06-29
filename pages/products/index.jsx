import React, { useEffect } from "react";
import axios from "axios";
import { axiosServer } from "../../db/axios";

const Product = () => {
    useEffect(() => {
        const fetchProducts = async () => {
            const { data: products } = await axiosServer.get("/products");

            console.log(products);
            return products;
        };
        fetchProducts();
    }, []);

    return <div>Product</div>;
};

export const getServerSideProps = async () => {
    return {
        props: {},
    };
};

export default Product;

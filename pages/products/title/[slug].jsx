import {
    Button,
    Card,
    Carousel,
    Rating,
    Spinner,
    TextInput,
} from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import ProductPageDetails from "../../../components/Product/ProductPageDetails";
import ProductPageImages from "../../../components/Product/ProductPageImages";
import ProductPageLoading from "../../../components/Product/ProductPageLoading";
import { axiosServer } from "../../../db/axios";
import { productActions } from "../../../redux/actions";
import { getError } from "../../../utils/error";

const ProductPage = ({ params }) => {
    const { slug } = params;

    const dispatch = useDispatch();
    const { product, loading } = useSelector(({ product }) => product);
    console.log({ product });

    const { productFetchFail, productFetchRequest, productFetchSuccess } =
        bindActionCreators(productActions, dispatch);

    useEffect(() => {
        const fetchProduct = async () => {
            productFetchRequest();
            try {
                const { data } = await axiosServer.get(
                    `/products/title/${slug}`
                );
                productFetchSuccess(data.product);
            } catch (error) {
                productFetchFail(getError(error));
                console.log(error);
            }
        };
        fetchProduct();
    }, []);

    return (
        <div>
            <Card>
                <ProductPageLoading loading={loading} />
                {product && (
                    <div>
                        <div className="grid grid-cols-2 gap-2">
                            <ProductPageImages images={product.images} />
                            <ProductPageDetails
                                title={product.title}
                                price={product.price}
                                store={product.Market}
                                description={product.description}
                            />
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
};

export async function getServerSideProps({ params }) {
    return {
        props: { params },
    };
}

export default ProductPage;

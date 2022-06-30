import { Card, Carousel, Spinner } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { axiosServer } from "../../../db/axios";
import { productActions } from "../../../redux/actions";
import { getError } from "../../../utils/error";

const ProductPage = ({ params }) => {
    const { slug } = params;

    const dispatch = useDispatch();
    const { product, loading } = useSelector(({ product }) => product);

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
                {loading && (
                    <div className="flex justify-center items-center">
                        <Spinner
                            aria-label="Extra small spinner example"
                            size="xl"
                        />
                    </div>
                )}
                {product && (
                    <div>
                        <h2 className="text-4xl font-bold mb-5">
                            {product.title}
                        </h2>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-80">
                                {
                                    <Carousel>
                                        {product.images.map((image) => (
                                            <img
                                                src={image.url}
                                                key={image.public_id}
                                            />
                                        ))}
                                    </Carousel>
                                }
                            </div>
                            <div className="p-5">
                                <h5 className="text-2xl font-bold mb-5">
                                    {product.price}$
                                </h5>

                                <div>
                                    <p>{product.description}</p>
                                </div>
                            </div>
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

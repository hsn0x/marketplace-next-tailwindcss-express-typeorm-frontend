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
import { axiosServer } from "../../../db/axios";
import { productActions } from "../../../redux/actions";
import { getError } from "../../../utils/error";

const ProductPage = ({ params }) => {
    const { slug } = params;

    const dispatch = useDispatch();
    const [productImageSelected, selectProductImage] = useState(0);
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
                        <div className="grid grid-cols-2 gap-2">
                            <div className="">
                                <div className="mb-3 hover:scale-105 transition duration-300 border-4 rounded-3xl overflow-hidden">
                                    <Image
                                        layout="responsive"
                                        objectFit="cover"
                                        src={
                                            product.images[productImageSelected]
                                                .url
                                        }
                                        alt={
                                            product.images[productImageSelected]
                                                .public_id
                                        }
                                        width={600}
                                        height={400}
                                    />
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {product.images.map((image, imageIndex) => (
                                        <div
                                            className="w-28 h-28 hover:scale-105 transition duration-300 cursor-pointer border-4 rounded-3xl overflow-hidden"
                                            key={image.id}
                                            onMouseOver={() =>
                                                selectProductImage(imageIndex)
                                            }
                                        >
                                            <Image
                                                layout="responsive"
                                                objectFit="cover"
                                                src={image.url}
                                                alt={image.public_id}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5">
                                <h2 className="text-4xl font-bold mb-5">
                                    {product.title}
                                </h2>
                                <div className="rating mb-5">
                                    <Rating>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star filled={false} />
                                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            4.95 out of 5
                                        </p>
                                    </Rating>
                                </div>
                                <div className="price flex mb-5">
                                    <div className="p-3 mr-2 bg-gray-50 border-2 rounded">
                                        <h5 className="text-2xl font-bold">
                                            {product.price} $
                                        </h5>
                                    </div>
                                    <div className="">
                                        <span className="text-lg text-green-400 font-bold">
                                            Save 12%
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="text-lg font-bold text-gray-500">
                                        {product.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex">
                                        <div className="mr-2 w-32">
                                            <TextInput
                                                id="quntity"
                                                type="number"
                                                placeholder="Quntity"
                                                required={true}
                                            />
                                        </div>
                                        <div className="">
                                            <Button gradientMonochrome="info">
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
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

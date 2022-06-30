import React, { useEffect, useRef } from "react";
import axios from "axios";
import { axiosServer } from "../../db/axios";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { getError } from "../../utils/error";
import { Card, Carousel, Spinner } from "flowbite-react";
import Link from "next/link";

const Products = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(({ products }) => products);

    const { productsFetchFail, productsFetchRequest, productsFetchSuccess } =
        bindActionCreators(productsActions, dispatch);

    useEffect(() => {
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
            <Card>
                {loading && (
                    <div className="flex justify-center items-center">
                        <Spinner
                            aria-label="Extra small spinner example"
                            size="xl"
                        />
                    </div>
                )}
                <h1>Products</h1>
                <div className="grid grid-cols-3 gap-2">
                    {products.map((product) => (
                        <div key={product.id} className="">
                            <Card style={{ height: "100%" }}>
                                <Link href={`products/title/${product.slug}`}>
                                    <h2 className="">{product.title}</h2>
                                </Link>
                                <div className="h-40">
                                    <Carousel className="h-screen">
                                        {product.images.map((image) => (
                                            <img
                                                src={image.url}
                                                alt=""
                                                key={image.public_id}
                                            />
                                        ))}
                                    </Carousel>
                                </div>
                                <p>{product.description}</p>
                                <h5>{product.price}</h5>
                            </Card>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export const getServerSideProps = async () => {
    return {
        props: {},
    };
};

export default Products;

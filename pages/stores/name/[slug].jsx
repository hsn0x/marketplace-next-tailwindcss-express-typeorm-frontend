import {
    Button,
    Card,
    Carousel,
    Rating,
    Spinner,
    Tabs,
    TextInput,
} from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import ProductsBox from "../../../components/Products/ProductsBox";
import { axiosServer } from "../../../db/axios";
import { marketActions } from "../../../redux/actions";
import { getError } from "../../../utils/error";

const MarketPage = ({ params }) => {
    const { slug } = params;

    const dispatch = useDispatch();
    const [marketImageSelected, selectMarketImage] = useState(0);
    const { market, loading } = useSelector(({ market }) => market);

    const { marketFetchFail, marketFetchRequest, marketFetchSuccess } =
        bindActionCreators(marketActions, dispatch);

    useEffect(() => {
        const fetchMarket = async () => {
            marketFetchRequest();
            try {
                const { data } = await axiosServer.get(`/markets/name/${slug}`);
                marketFetchSuccess(data.market);
            } catch (error) {
                marketFetchFail(getError(error));
                console.log(error);
            }
        };
        fetchMarket();
    }, []);

    return (
        <div>
            {loading && (
                <div className="flex justify-center items-center">
                    <Spinner
                        aria-label="Extra small spinner example"
                        size="xl"
                    />
                </div>
            )}
            {market && (
                <div className="grid grid-cols-1 gap-1">
                    <div>
                        <Card>
                            <div className="">
                                <div className="mb-3 hover:scale-105 transition duration-300 border-4 rounded-3xl overflow-hidden">
                                    <Image
                                        layout="responsive"
                                        objectFit="cover"
                                        src={
                                            market.images[marketImageSelected]
                                                .url
                                        }
                                        alt={
                                            market.images[marketImageSelected]
                                                .public_id
                                        }
                                        width={600}
                                        height={200}
                                    />
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {market.images.map((image, imageIndex) => (
                                        <div
                                            className="w-16 h-16 hover:scale-105 transition duration-300 cursor-pointer border-4 rounded-3xl overflow-hidden"
                                            key={image.id}
                                            onMouseOver={() =>
                                                selectMarketImage(imageIndex)
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
                        </Card>
                    </div>

                    <div>
                        <Card>
                            <div className="p-5">
                                <h2 className="text-4xl font-bold mb-5">
                                    {market.title}
                                    <div>
                                        <h2>
                                            <span className="text-xl">
                                                {market.name}
                                            </span>{" "}
                                            <span className="font-bold text-sm">
                                                @{market.username}
                                            </span>
                                        </h2>
                                    </div>
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

                                <div className="mb-6">
                                    <p className="text-lg font-bold text-gray-500">
                                        {market.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div>
                        <Card>
                            <Tabs.Group aria-label="Pills" style="pills">
                                <Tabs.Item active={true} title="Products">
                                    <ProductsBox products={market.Products} />
                                </Tabs.Item>
                                <Tabs.Item title="About">
                                    <div className="mb-6">
                                        <p className="text-lg font-bold text-gray-500">
                                            {market.about}
                                        </p>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item title="Reviews">Reviews</Tabs.Item>
                            </Tabs.Group>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
};

export async function getServerSideProps({ params }) {
    return {
        props: { params },
    };
}

export default MarketPage;

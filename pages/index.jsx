import { Card, Tabs } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import ProductsBox from "../components/Products/ProductsBox";
import StoresBox from "../components/Stores/StoresBox";
import { axiosServer } from "../db/axios";
import { notRequireAuthentication } from "../HOC/notRequireAuthentication";
import { marketsActions, productsActions } from "../redux/actions";
import { updateAuth, updateIsAuthenticated } from "../redux/actions/auth";
import { getUser } from "../redux/reducers/users";
import { getError } from "../utils/error";

const HomePage = ({ authUser }) => {
    const dispatch = useDispatch();

    /**
     * use Selector Markets
     * use Selector Products
     */
    const markets = useSelector(({ markets }) => markets);
    const products = useSelector(({ products }) => products);
    console.log("markets", markets);

    /**
     * Markets Actions
     * Products Actions
     */
    const { marketsFetchFail, marketsFetchRequest, marketsFetchSuccess } =
        bindActionCreators(marketsActions, dispatch);
    const { productsFetchFail, productsFetchRequest, productsFetchSuccess } =
        bindActionCreators(productsActions, dispatch);

    useEffect(() => {
        /**
         * Update Auth
         * Update Is Authenticated
         */
        dispatch(updateAuth(authUser));
        dispatch(updateIsAuthenticated(!!authUser));

        /**
         * Fetch Markets
         */
        const fetchMarkets = async () => {
            marketsFetchRequest();
            try {
                const { data } = await axiosServer.get("/markets");
                marketsFetchSuccess(data);
            } catch (error) {
                marketsFetchFail(getError(error));
            }
        };
        fetchMarkets();

        /**
         * Fetch Products
         */
        const fetchProducts = async () => {
            productsFetchRequest();
            try {
                const { data } = await axiosServer.get("/products");
                productsFetchSuccess(data);
            } catch (error) {
                productsFetchFail(getError(error));
            }
        };
        fetchProducts();
    }, [authUser, dispatch]);

    return (
        <div>
            <div>
                <div className="mb-2">
                    <Card className="">
                        <h2 className="text-4xl">Welcome To Marketplace</h2>
                    </Card>
                </div>
            </div>
            <Tabs.Group>
                <Tabs.Item title="Products">
                    <div>
                        <div>
                            <div className="mb-2">
                                <Card className="">
                                    <h2 className="text-4xl">
                                        Favorites Products
                                    </h2>
                                </Card>
                            </div>
                        </div>
                        <ProductsBox products={products.rows} />
                    </div>
                    <div>
                        <div>
                            <div className="mb-2">
                                <Card className="">
                                    <h2 className="text-4xl">
                                        Most Viwed Products
                                    </h2>
                                </Card>
                            </div>
                        </div>
                        <ProductsBox products={products.rows} />
                    </div>
                    <div>
                        <div>
                            <div className="mb-2">
                                <Card className="">
                                    <h2 className="text-4xl">Top Products</h2>
                                </Card>
                            </div>
                        </div>
                        <ProductsBox products={products.rows} />
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Stores">
                    <div>
                        <div>
                            <div className="mb-2">
                                <Card className="">
                                    <h2 className="text-4xl">
                                        Favorites Stores
                                    </h2>
                                </Card>
                            </div>
                        </div>
                        <StoresBox markets={markets.rows} />
                    </div>
                    <div>
                        <div>
                            <div className="mb-2">
                                <Card className="">
                                    <h2 className="text-4xl">
                                        Most Viwed Stores
                                    </h2>
                                </Card>
                            </div>
                        </div>
                        <StoresBox markets={markets.rows} />
                    </div>
                    <div>
                        <div>
                            <div className="mb-2">
                                <Card className="">
                                    <h2 className="text-4xl">Top Stores</h2>
                                </Card>
                            </div>
                        </div>
                        <StoresBox markets={markets.rows} />
                    </div>
                </Tabs.Item>
            </Tabs.Group>
        </div>
    );
};

export const getServerSideProps = notRequireAuthentication((context) => {
    return {};
});

export default HomePage;

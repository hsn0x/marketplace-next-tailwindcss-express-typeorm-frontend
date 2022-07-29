import { Card } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
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
    const {
        rows: markets,
        loading: marketsLoading,
        totalItems: marketsTotalItems,
        totalPages: marketsTotalPages,
        currentPage: marketsCurrentPage,
    } = useSelector(({ markets }) => markets);
    console.log("markets", markets);
    const {
        rows: products,
        loading: productsLoading,
        totalItems: productsTotalItems,
        totalPages: productsTotalPages,
        currentPage: productsCurrentPage,
    } = useSelector(({ products }) => products);

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
                marketsFetchSuccess(data.rows);
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
                const { data } = await axiosServer.get("/products", {
                    params: {
                        page: currentPage,
                        size: 21,
                    },
                });
                productsFetchSuccess(data);
            } catch (error) {
                productsFetchFail(getError(error));
            }
        };
        fetchProducts();
    }, [authUser, dispatch]);

    return (
        <div>
            <StoresBox markets={markets} />
        </div>
    );
};

export const getServerSideProps = notRequireAuthentication((context) => {
    return {};
});

export default HomePage;

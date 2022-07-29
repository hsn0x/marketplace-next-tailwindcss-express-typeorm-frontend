import React, { useEffect, useRef } from "react";
import axios from "axios";
import { axiosServer } from "../../db/axios";
import { useDispatch, useSelector } from "react-redux";
import { marketsActions } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { getError } from "../../utils/error";
import { Card, Carousel, Spinner } from "flowbite-react";
import Link from "next/link";
import StoreBox from "../../components/Store/StoreBox";
import StorePageTitle from "../../components/Stores/StoresPageTitle";
import StorePageLoading from "../../components/Stores/StoresPageLoading";
import StoresBox from "../../components/Stores/StoresBox";
import { notRequireAuthentication } from "../../HOC/notRequireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../redux/actions/auth";
import ProductsPagination from "../../components/Products/ProductsPagination";

const MarketsPage = ({ authUser }) => {
    const dispatch = useDispatch();

    const markets = useSelector(({ markets }) => markets);
    const marketsSearch = useSelector(({ marketsSearch }) => marketsSearch);

    const { marketsFetchFail, marketsFetchRequest, marketsFetchSuccess } =
        bindActionCreators(marketsActions, dispatch);

    useEffect(() => {
        dispatch(updateAuth(authUser));
        dispatch(updateIsAuthenticated(!!authUser));

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
    }, []);

    return (
        <div>
            <StorePageLoading loading={markets.loading} />
            <div>
                <ProductsPagination
                    totalItems={markets.totalItems}
                    totalPages={markets.totalPages}
                    currentPage={markets.currentPage}
                />
            </div>
            <div>
                <StorePageTitle title="All Stores" />
            </div>
            <div>
                {marketsSearch.rows && marketsSearch.rows.length > 0 ? (
                    <StoresBox markets={marketsSearch.rows} />
                ) : (
                    <StoresBox markets={markets.rows} />
                )}
            </div>

            <div>
                <ProductsPagination
                    totalItems={markets.totalItems}
                    totalPages={markets.totalPages}
                    currentPage={markets.currentPage}
                />
            </div>
        </div>
    );
};

export const getServerSideProps = notRequireAuthentication((context) => {
    return {};
});

export default MarketsPage;

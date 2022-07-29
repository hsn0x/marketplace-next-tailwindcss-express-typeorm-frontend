import { Card, Pagination } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { axiosServer } from "../../db/axios";
import { marketsActions } from "../../redux/actions";
import { getError } from "../../utils/error";

const StoresPagination = ({ totalItems, totalPages, currentPage }) => {
    const dispatch = useDispatch();

    const { marketsFetchFail, marketsFetchRequest, marketsFetchSuccess } =
        bindActionCreators(marketsActions, dispatch);

    const onPageChange = (selectedPage) => {
        const fetchMarkets = async () => {
            marketsFetchRequest();
            try {
                const { data } = await axiosServer.get("/markets", {
                    params: {
                        page: selectedPage,
                        size: 5,
                    },
                });
                marketsFetchSuccess(data);
            } catch (error) {
                marketsFetchFail(getError(error));
            }
        };
        fetchMarkets();
    };
    return (
        <div className="flex justify-center p-2">
            <Pagination
                currentPage={currentPage}
                onPageChange={onPageChange}
                showIcons={true}
                totalPages={totalPages}
            />
        </div>
    );
};

export default StoresPagination;

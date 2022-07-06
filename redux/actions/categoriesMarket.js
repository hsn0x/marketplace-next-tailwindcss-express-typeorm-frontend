const categoriesMarketFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_FETCH_REQUEST",
        });
    };
};
const categoriesMarketFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_FETCH_SUCCESS",
            payload,
        });
    };
};
const categoriesMarketFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_FETCH_FAIL",
            payload,
        });
    };
};
const categoriesMarketCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_CREATE_REQUEST",
        });
    };
};
const categoriesMarketCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_CREATE_SUCCESS",
        });
    };
};
const categoriesMarketCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_CREATE_FAIL",
        });
    };
};
const categoriesMarketDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_DELETE_REQUEST",
        });
    };
};
const categoriesMarketDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_DELETE_SUCCESS",
        });
    };
};
const categoriesMarketDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_DELETE_FAIL",
        });
    };
};
const categoriesMarketDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_MARKET_DELETE_RESET",
        });
    };
};

export {
    categoriesMarketFetchRequest,
    categoriesMarketFetchSuccess,
    categoriesMarketFetchFail,
    categoriesMarketCreateRequest,
    categoriesMarketCreateSuccess,
    categoriesMarketCreateFail,
    categoriesMarketDeleteRequest,
    categoriesMarketDeleteSuccess,
    categoriesMarketDeleteFail,
    categoriesMarketDeleteReset,
};

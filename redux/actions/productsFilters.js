const productsFiltersUpdateProducts = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_FILTERS_UPDATE_PRODUCTS",
            payload,
        });
    };
};
const productsFiltersUpdateMinPrice = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_FILTERS_UPDATE_MIN_PRICE",
            payload,
        });
    };
};
const productsFiltersUpdateMaxPrice = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_FILTERS_UPDATE_MAX_PRICE",
            payload,
        });
    };
};
const productsFiltersUpdateCategory = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_FILTERS_UPDATE_CATEGORY",
            payload,
        });
    };
};
const productsSearchFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_FETCH_REQUEST",
        });
    };
};
const productsSearchFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_FETCH_SUCCESS",
            payload,
        });
    };
};
const productsSearchFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_FETCH_FAIL",
            payload,
        });
    };
};

export {
    productsFiltersUpdateProducts,
    productsFiltersUpdateMinPrice,
    productsFiltersUpdateMaxPrice,
    productsFiltersUpdateCategory,
    productsSearchFetchRequest,
    productsSearchFetchSuccess,
    productsSearchFetchFail,
};

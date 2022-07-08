const productsSearchUpdateQuery = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_UPDATE_QUERY",
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
const productsSearchSearchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_SEARCH_REQUEST",
        });
    };
};
const productsSearchSearchSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_SEARCH_SUCCESS",
        });
    };
};
const productsSearchSearchFail = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_SEARCH_FAIL",
        });
    };
};
const productsSearchDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_DELETE_REQUEST",
        });
    };
};
const productsSearchDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_DELETE_SUCCESS",
        });
    };
};
const productsSearchDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_DELETE_FAIL",
        });
    };
};
const productsSearchDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_SEARCH_DELETE_RESET",
        });
    };
};

export {
    productsSearchUpdateQuery,
    productsSearchFetchRequest,
    productsSearchFetchSuccess,
    productsSearchFetchFail,
    productsSearchSearchRequest,
    productsSearchSearchSuccess,
    productsSearchSearchFail,
    productsSearchDeleteRequest,
    productsSearchDeleteSuccess,
    productsSearchDeleteFail,
    productsSearchDeleteReset,
};

const marketsSearchUpdateQuery = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_UPDATE_QUERY",
            payload,
        });
    };
};

const marketsSearchFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_FETCH_REQUEST",
        });
    };
};
const marketsSearchFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_FETCH_SUCCESS",
            payload,
        });
    };
};
const marketsSearchFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_FETCH_FAIL",
            payload,
        });
    };
};
const marketsSearchSearchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_SEARCH_REQUEST",
        });
    };
};
const marketsSearchSearchSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_SEARCH_SUCCESS",
        });
    };
};
const marketsSearchSearchFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_SEARCH_FAIL",
        });
    };
};
const marketsSearchDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_DELETE_REQUEST",
        });
    };
};
const marketsSearchDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_DELETE_SUCCESS",
        });
    };
};
const marketsSearchDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_DELETE_FAIL",
        });
    };
};
const marketsSearchDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_SEARCH_DELETE_RESET",
        });
    };
};

export {
    marketsSearchUpdateQuery,
    marketsSearchFetchRequest,
    marketsSearchFetchSuccess,
    marketsSearchFetchFail,
    marketsSearchSearchRequest,
    marketsSearchSearchSuccess,
    marketsSearchSearchFail,
    marketsSearchDeleteRequest,
    marketsSearchDeleteSuccess,
    marketsSearchDeleteFail,
    marketsSearchDeleteReset,
};

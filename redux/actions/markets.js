const marketsFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_FETCH_REQUEST",
        });
    };
};
const marketsFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_FETCH_SUCCESS",
            payload,
        });
    };
};
const marketsFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_FETCH_FAIL",
            payload,
        });
    };
};
const marketsCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_CREATE_REQUEST",
        });
    };
};
const marketsCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_CREATE_SUCCESS",
        });
    };
};
const marketsCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_CREATE_FAIL",
        });
    };
};
const marketsDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_DELETE_REQUEST",
        });
    };
};
const marketsDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_DELETE_SUCCESS",
        });
    };
};
const marketsDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_DELETE_FAIL",
        });
    };
};
const marketsDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKETS_DELETE_RESET",
        });
    };
};

export {
    marketsFetchRequest,
    marketsFetchSuccess,
    marketsFetchFail,
    marketsCreateRequest,
    marketsCreateSuccess,
    marketsCreateFail,
    marketsDeleteRequest,
    marketsDeleteSuccess,
    marketsDeleteFail,
    marketsDeleteReset,
};

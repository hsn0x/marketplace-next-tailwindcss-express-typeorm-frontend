const marketFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_FETCH_REQUEST",
        });
    };
};
const marketFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_FETCH_SUCCESS",
            payload,
        });
    };
};
const marketFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_FETCH_FAIL",
            payload,
        });
    };
};
const marketCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_REQUEST",
        });
    };
};
const marketCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_SUCCESS",
        });
    };
};
const marketCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_FAIL",
        });
    };
};
const marketDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_DELETE_REQUEST",
        });
    };
};
const marketDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_DELETE_SUCCESS",
        });
    };
};
const marketDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_DELETE_FAIL",
        });
    };
};
const marketDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_DELETE_RESET",
        });
    };
};

export {
    marketFetchRequest,
    marketFetchSuccess,
    marketFetchFail,
    marketCreateRequest,
    marketCreateSuccess,
    marketCreateFail,
    marketDeleteRequest,
    marketDeleteSuccess,
    marketDeleteFail,
    marketDeleteReset,
};

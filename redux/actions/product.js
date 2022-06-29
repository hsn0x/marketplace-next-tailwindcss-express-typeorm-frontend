const productFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_FETCH_REQUEST",
        });
    };
};
const productFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_FETCH_SUCCESS",
            payload,
        });
    };
};
const productFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_FETCH_FAIL",
            payload,
        });
    };
};
const productCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_REQUEST",
        });
    };
};
const productCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_SUCCESS",
        });
    };
};
const productCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_FAIL",
        });
    };
};
const productDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_DELETE_REQUEST",
        });
    };
};
const productDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_DELETE_SUCCESS",
        });
    };
};
const productDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_DELETE_FAIL",
        });
    };
};
const productDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_DELETE_RESET",
        });
    };
};

export {
    productFetchRequest,
    productFetchSuccess,
    productFetchFail,
    productCreateRequest,
    productCreateSuccess,
    productCreateFail,
    productDeleteRequest,
    productDeleteSuccess,
    productDeleteFail,
    productDeleteReset,
};

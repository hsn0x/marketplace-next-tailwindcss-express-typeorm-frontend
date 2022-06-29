const productsFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_FETCH_REQUEST",
        });
    };
};
const productsFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_FETCH_SUCCESS",
            payload,
        });
    };
};
const productsFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_FETCH_FAIL",
            payload,
        });
    };
};
const productsCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_CREATE_REQUEST",
        });
    };
};
const productsCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_CREATE_SUCCESS",
        });
    };
};
const productsCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_CREATE_FAIL",
        });
    };
};
const productsDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_DELETE_REQUEST",
        });
    };
};
const productsDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_DELETE_SUCCESS",
        });
    };
};
const productsDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_DELETE_FAIL",
        });
    };
};
const productsDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_DELETE_RESET",
        });
    };
};

export {
    productsFetchRequest,
    productsFetchSuccess,
    productsFetchFail,
    productsCreateRequest,
    productsCreateSuccess,
    productsCreateFail,
    productsDeleteRequest,
    productsDeleteSuccess,
    productsDeleteFail,
    productsDeleteReset,
};

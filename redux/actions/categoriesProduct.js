const categoriesProductFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_FETCH_REQUEST",
        });
    };
};
const categoriesProductFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_FETCH_SUCCESS",
            payload,
        });
    };
};
const categoriesProductFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_FETCH_FAIL",
            payload,
        });
    };
};
const categoriesProductCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_CREATE_REQUEST",
        });
    };
};
const categoriesProductCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_CREATE_SUCCESS",
        });
    };
};
const categoriesProductCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_CREATE_FAIL",
        });
    };
};
const categoriesProductDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_DELETE_REQUEST",
        });
    };
};
const categoriesProductDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_DELETE_SUCCESS",
        });
    };
};
const categoriesProductDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_DELETE_FAIL",
        });
    };
};
const categoriesProductDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_PRODUCT_DELETE_RESET",
        });
    };
};

export {
    categoriesProductFetchRequest,
    categoriesProductFetchSuccess,
    categoriesProductFetchFail,
    categoriesProductCreateRequest,
    categoriesProductCreateSuccess,
    categoriesProductCreateFail,
    categoriesProductDeleteRequest,
    categoriesProductDeleteSuccess,
    categoriesProductDeleteFail,
    categoriesProductDeleteReset,
};

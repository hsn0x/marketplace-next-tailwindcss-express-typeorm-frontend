const categoriesFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_FETCH_REQUEST",
        });
    };
};
const categoriesFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_FETCH_SUCCESS",
            payload,
        });
    };
};
const categoriesFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_FETCH_FAIL",
            payload,
        });
    };
};
const categoriesCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_CREATE_REQUEST",
        });
    };
};
const categoriesCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_CREATE_SUCCESS",
        });
    };
};
const categoriesCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_CREATE_FAIL",
        });
    };
};
const categoriesDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_DELETE_REQUEST",
        });
    };
};
const categoriesDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_DELETE_SUCCESS",
        });
    };
};
const categoriesDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_DELETE_FAIL",
        });
    };
};
const categoriesDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORIES_DELETE_RESET",
        });
    };
};

export {
    categoriesFetchRequest,
    categoriesFetchSuccess,
    categoriesFetchFail,
    categoriesCreateRequest,
    categoriesCreateSuccess,
    categoriesCreateFail,
    categoriesDeleteRequest,
    categoriesDeleteSuccess,
    categoriesDeleteFail,
    categoriesDeleteReset,
};

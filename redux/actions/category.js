const categoryFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_FETCH_REQUEST",
        });
    };
};
const categoryFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_FETCH_SUCCESS",
            payload,
        });
    };
};
const categoryFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_FETCH_FAIL",
            payload,
        });
    };
};
const categoryCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_CREATE_REQUEST",
        });
    };
};
const categoryCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_CREATE_SUCCESS",
        });
    };
};
const categoryCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_CREATE_FAIL",
        });
    };
};
const categoryDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_DELETE_REQUEST",
        });
    };
};
const categoryDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_DELETE_SUCCESS",
        });
    };
};
const categoryDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_DELETE_FAIL",
        });
    };
};
const categoryDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "CATEGORY_DELETE_RESET",
        });
    };
};

export {
    categoryFetchRequest,
    categoryFetchSuccess,
    categoryFetchFail,
    categoryCreateRequest,
    categoryCreateSuccess,
    categoryCreateFail,
    categoryDeleteRequest,
    categoryDeleteSuccess,
    categoryDeleteFail,
    categoryDeleteReset,
};

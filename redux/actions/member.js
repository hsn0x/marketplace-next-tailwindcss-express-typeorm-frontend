const memberFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_FETCH_REQUEST",
        });
    };
};
const memberFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_FETCH_SUCCESS",
            payload,
        });
    };
};
const memberFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_FETCH_FAIL",
            payload,
        });
    };
};
const memberCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_CREATE_REQUEST",
        });
    };
};
const memberCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_CREATE_SUCCESS",
        });
    };
};
const memberCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_CREATE_FAIL",
        });
    };
};
const memberDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_DELETE_REQUEST",
        });
    };
};
const memberDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_DELETE_SUCCESS",
        });
    };
};
const memberDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_DELETE_FAIL",
        });
    };
};
const memberDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBER_DELETE_RESET",
        });
    };
};

export {
    memberFetchRequest,
    memberFetchSuccess,
    memberFetchFail,
    memberCreateRequest,
    memberCreateSuccess,
    memberCreateFail,
    memberDeleteRequest,
    memberDeleteSuccess,
    memberDeleteFail,
    memberDeleteReset,
};

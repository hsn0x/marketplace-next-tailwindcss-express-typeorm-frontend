const membersFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_FETCH_REQUEST",
        });
    };
};
const membersFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_FETCH_SUCCESS",
            payload,
        });
    };
};
const membersFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_FETCH_FAIL",
            payload,
        });
    };
};
const membersCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_CREATE_REQUEST",
        });
    };
};
const membersCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_CREATE_SUCCESS",
        });
    };
};
const membersCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_CREATE_FAIL",
        });
    };
};
const membersDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_DELETE_REQUEST",
        });
    };
};
const membersDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_DELETE_SUCCESS",
        });
    };
};
const membersDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_DELETE_FAIL",
        });
    };
};
const membersDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERS_DELETE_RESET",
        });
    };
};

export {
    membersFetchRequest,
    membersFetchSuccess,
    membersFetchFail,
    membersCreateRequest,
    membersCreateSuccess,
    membersCreateFail,
    membersDeleteRequest,
    membersDeleteSuccess,
    membersDeleteFail,
    membersDeleteReset,
};

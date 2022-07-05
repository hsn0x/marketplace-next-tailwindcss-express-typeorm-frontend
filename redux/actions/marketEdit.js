const marketEditUpdateName = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_EDIT_UPDATE_NAME",
            payload,
        });
    };
};
const marketEditUpdateUsername = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_EDIT_UPDATE_USERNAME",
            payload,
        });
    };
};
const marketEditUpdateTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_EDIT_UPDATE_TITLE",
            payload,
        });
    };
};

const marketEditUpdateDescription = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_EDIT_UPDATE_DESCRIPTION",
            payload,
        });
    };
};

const marketEditUpdateCategory = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_EDIT_UPDATE_CATEGORY",
            payload,
        });
    };
};

const marketEditUpdateMedia = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_EDIT_UPDATE_MEDIA",
            payload,
        });
    };
};
const marketEditUpdateAbout = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_EDIT_UPDATE_ABOUT",
            payload,
        });
    };
};

export {
    marketEditUpdateName,
    marketEditUpdateUsername,
    marketEditUpdateTitle,
    marketEditUpdateDescription,
    marketEditUpdateCategory,
    marketEditUpdateMedia,
    marketEditUpdateAbout,
};

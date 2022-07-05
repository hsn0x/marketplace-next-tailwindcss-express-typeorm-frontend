const marketCreateUpdateName = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_UPDATE_NAME",
            payload,
        });
    };
};
const marketCreateUpdateUsername = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_UPDATE_USERNAME",
            payload,
        });
    };
};
const marketCreateUpdateTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_UPDATE_TITLE",
            payload,
        });
    };
};

const marketCreateUpdateDescription = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_UPDATE_DESCRIPTION",
            payload,
        });
    };
};

const marketCreateUpdateCategory = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_UPDATE_CATEGORY",
            payload,
        });
    };
};

const marketCreateUpdateMedia = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_UPDATE_MEDIA",
            payload,
        });
    };
};
const marketCreateUpdateAbout = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "MARKET_CREATE_UPDATE_ABOUT",
            payload,
        });
    };
};

export {
    marketCreateUpdateName,
    marketCreateUpdateUsername,
    marketCreateUpdateTitle,
    marketCreateUpdateDescription,
    marketCreateUpdateCategory,
    marketCreateUpdateMedia,
    marketCreateUpdateAbout,
};

const productCreateUpdateTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_UPDATE_TITLE",
            payload,
        });
    };
};

const productCreateUpdateDescription = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_UPDATE_DESCRIPTION",
            payload,
        });
    };
};

const productCreateUpdatePrice = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_UPDATE_PRICE",
            payload,
        });
    };
};

const productCreateUpdateQuantity = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_UPDATE_QUANTITY",
            payload,
        });
    };
};

const productCreateUpdateCategory = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_UPDATE_CATEGORY",
            payload,
        });
    };
};

const productCreateUpdateStore = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_UPDATE_STORE",
            payload,
        });
    };
};

const productCreateUpdateMedia = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_CREATE_UPDATE_MEDIA",
            payload,
        });
    };
};

export {
    productCreateUpdateTitle,
    productCreateUpdateDescription,
    productCreateUpdatePrice,
    productCreateUpdateQuantity,
    productCreateUpdateCategory,
    productCreateUpdateStore,
    productCreateUpdateMedia,
};

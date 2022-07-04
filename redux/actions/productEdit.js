const productEditUpdateTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_EDIT_UPDATE_TITLE",
            payload,
        });
    };
};

const productEditUpdateDescription = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_EDIT_UPDATE_DESCRIPTION",
            payload,
        });
    };
};

const productEditUpdatePrice = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_EDIT_UPDATE_PRICE",
            payload,
        });
    };
};

const productEditUpdateQuantity = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_EDIT_UPDATE_QUANTITY",
            payload,
        });
    };
};

const productEditUpdateCategory = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_EDIT_UPDATE_CATEGORY",
            payload,
        });
    };
};

const productEditUpdateStore = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_EDIT_UPDATE_STORE",
            payload,
        });
    };
};

const productEditUpdateMedia = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_EDIT_UPDATE_MEDIA",
            payload,
        });
    };
};

export {
    productEditUpdateTitle,
    productEditUpdateDescription,
    productEditUpdatePrice,
    productEditUpdateQuantity,
    productEditUpdateCategory,
    productEditUpdateStore,
    productEditUpdateMedia,
};

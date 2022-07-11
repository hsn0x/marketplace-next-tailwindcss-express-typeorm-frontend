export const updateProductReviewRate = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PRODUCT_REVIEW_RATE",
            payload,
        });
    };
};
export const updateProductReviewTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PRODUCT_REVIEW_TITLE",
            payload,
        });
    };
};
export const updateProductReviewContent = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PRODUCT_REVIEW_CONTENT",
            payload,
        });
    };
};

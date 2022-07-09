export const updateProductCommentTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PRODUCT_COMMENT_TITLE",
            payload,
        });
    };
};

export const updateProductCommentContent = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PRODUCT_COMMENT_CONTENT",
            payload,
        });
    };
};

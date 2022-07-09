const UPDATE_PRODUCT_COMMENT_TITLE = "UPDATE_PRODUCT_COMMENT_TITLE";
const UPDATE_PRODUCT_COMMENT_CONTENT = "UPDATE_PRODUCT_COMMENT_CONTENT";

const initialState = {
    title: "",
    content: "",
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_COMMENT_TITLE:
            return { ...state, title: action.payload };
        case UPDATE_PRODUCT_COMMENT_CONTENT:
            return { ...state, content: action.payload };
        default:
            return state;
    }
};

export default reducer;

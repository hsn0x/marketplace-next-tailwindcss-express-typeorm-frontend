const UPDATE_PRODUCT_REVIEW_RATE = "UPDATE_PRODUCT_REVIEW_RATE";
const UPDATE_PRODUCT_REVIEW_TITLE = "UPDATE_PRODUCT_REVIEW_TITLE";
const UPDATE_PRODUCT_REVIEW_CONTENT = "UPDATE_PRODUCT_REVIEW_CONTENT";

const initialState = {
    title: "",
    content: "",
    rate: 1,
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_REVIEW_RATE:
            return { ...state, rate: action.payload };
        case UPDATE_PRODUCT_REVIEW_TITLE:
            return { ...state, title: action.payload };
        case UPDATE_PRODUCT_REVIEW_CONTENT:
            return { ...state, content: action.payload };
        default:
            return state;
    }
};

export default reducer;

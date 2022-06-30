const PRODUCT_FETCH_REQUEST = "PRODUCT_FETCH_REQUEST";
const PRODUCT_FETCH_SUCCESS = "PRODUCT_FETCH_SUCCESS";
const PRODUCT_FETCH_FAIL = "PRODUCT_FETCH_FAIL";
const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";
const PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS";
const PRODUCT_CREATE_FAIL = "PRODUCT_CREATE_FAIL";
const PRODUCT_DELETE_REQUEST = "PRODUCT_DELETE_REQUEST";
const PRODUCT_DELETE_SUCCESS = "PRODUCT_DELETE_SUCCESS";
const PRODUCT_DELETE_FAIL = "PRODUCT_DELETE_FAIL";
const PRODUCT_DELETE_RESET = "PRODUCT_DELETE_RESET";

const initialState = {
    product: null,
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: "",
            };
        case PRODUCT_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case PRODUCT_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case PRODUCT_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case PRODUCT_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case PRODUCT_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case PRODUCT_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case PRODUCT_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

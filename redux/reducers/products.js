const PRODUCTS_FETCH_REQUEST = "PRODUCTS_FETCH_REQUEST";
const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS";
const PRODUCTS_FETCH_FAIL = "PRODUCTS_FETCH_FAIL";
const PRODUCTS_CREATE_REQUEST = "PRODUCTS_CREATE_REQUEST";
const PRODUCTS_CREATE_SUCCESS = "PRODUCTS_CREATE_SUCCESS";
const PRODUCTS_CREATE_FAIL = "PRODUCTS_CREATE_FAIL";
const PRODUCTS_DELETE_REQUEST = "PRODUCTS_DELETE_REQUEST";
const PRODUCTS_DELETE_SUCCESS = "PRODUCTS_DELETE_SUCCESS";
const PRODUCTS_DELETE_FAIL = "PRODUCTS_DELETE_FAIL";
const PRODUCTS_DELETE_RESET = "PRODUCTS_DELETE_RESET";

const initialState = {
    loading: false,
    error: "",
    rows: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case PRODUCTS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action.payload,
                error: "",
            };
        case PRODUCTS_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCTS_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case PRODUCTS_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case PRODUCTS_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case PRODUCTS_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case PRODUCTS_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case PRODUCTS_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case PRODUCTS_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

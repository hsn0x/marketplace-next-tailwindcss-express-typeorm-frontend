const PRODUCTS_SEARCH_UPDATE_QUERY = "PRODUCTS_SEARCH_UPDATE_QUERY";
const PRODUCTS_SEARCH_FETCH_REQUEST = "PRODUCTS_SEARCH_FETCH_REQUEST";
const PRODUCTS_SEARCH_FETCH_SUCCESS = "PRODUCTS_SEARCH_FETCH_SUCCESS";
const PRODUCTS_SEARCH_FETCH_FAIL = "PRODUCTS_SEARCH_FETCH_FAIL";
const PRODUCTS_SEARCH_SEARCH_REQUEST = "PRODUCTS_SEARCH_SEARCH_REQUEST";
const PRODUCTS_SEARCH_SEARCH_SUCCESS = "PRODUCTS_SEARCH_SEARCH_SUCCESS";
const PRODUCTS_SEARCH_SEARCH_FAIL = "PRODUCTS_SEARCH_SEARCH_FAIL";
const PRODUCTS_SEARCH_DELETE_REQUEST = "PRODUCTS_SEARCH_DELETE_REQUEST";
const PRODUCTS_SEARCH_DELETE_SUCCESS = "PRODUCTS_SEARCH_DELETE_SUCCESS";
const PRODUCTS_SEARCH_DELETE_FAIL = "PRODUCTS_SEARCH_DELETE_FAIL";
const PRODUCTS_SEARCH_DELETE_RESET = "PRODUCTS_SEARCH_DELETE_RESET";

const initialState = {
    loading: false,
    error: "",

    rows: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    count: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_SEARCH_UPDATE_QUERY:
            return { ...state, query: action.payload };
        case PRODUCTS_SEARCH_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case PRODUCTS_SEARCH_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: "",
            };
        case PRODUCTS_SEARCH_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCTS_SEARCH_SEARCH_REQUEST:
            return { ...state, loadingSearch: true };
        case PRODUCTS_SEARCH_SEARCH_SUCCESS:
            return { ...state, loadingSearch: false };
        case PRODUCTS_SEARCH_SEARCH_FAIL:
            return { ...state, loadingSearch: false, error: action.payload };
        case PRODUCTS_SEARCH_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case PRODUCTS_SEARCH_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case PRODUCTS_SEARCH_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case PRODUCTS_SEARCH_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

const CATEGORIES_FETCH_REQUEST = "CATEGORIES_FETCH_REQUEST";
const CATEGORIES_FETCH_SUCCESS = "CATEGORIES_FETCH_SUCCESS";
const CATEGORIES_FETCH_FAIL = "CATEGORIES_FETCH_FAIL";
const CATEGORIES_CREATE_REQUEST = "CATEGORIES_CREATE_REQUEST";
const CATEGORIES_CREATE_SUCCESS = "CATEGORIES_CREATE_SUCCESS";
const CATEGORIES_CREATE_FAIL = "CATEGORIES_CREATE_FAIL";
const CATEGORIES_DELETE_REQUEST = "CATEGORIES_DELETE_REQUEST";
const CATEGORIES_DELETE_SUCCESS = "CATEGORIES_DELETE_SUCCESS";
const CATEGORIES_DELETE_FAIL = "CATEGORIES_DELETE_FAIL";
const CATEGORIES_DELETE_RESET = "CATEGORIES_DELETE_RESET";

const initialState = {
    categories: [],
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case CATEGORIES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
                error: "",
            };
        case CATEGORIES_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case CATEGORIES_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case CATEGORIES_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case CATEGORIES_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case CATEGORIES_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case CATEGORIES_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case CATEGORIES_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case CATEGORIES_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

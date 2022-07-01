const CATEGORY_FETCH_REQUEST = "CATEGORY_FETCH_REQUEST";
const CATEGORY_FETCH_SUCCESS = "CATEGORY_FETCH_SUCCESS";
const CATEGORY_FETCH_FAIL = "CATEGORY_FETCH_FAIL";
const CATEGORY_CREATE_REQUEST = "CATEGORY_CREATE_REQUEST";
const CATEGORY_CREATE_SUCCESS = "CATEGORY_CREATE_SUCCESS";
const CATEGORY_CREATE_FAIL = "CATEGORY_CREATE_FAIL";
const CATEGORY_DELETE_REQUEST = "CATEGORY_DELETE_REQUEST";
const CATEGORY_DELETE_SUCCESS = "CATEGORY_DELETE_SUCCESS";
const CATEGORY_DELETE_FAIL = "CATEGORY_DELETE_FAIL";
const CATEGORY_DELETE_RESET = "CATEGORY_DELETE_RESET";

const initialState = {
    category: null,
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case CATEGORY_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload,
                error: "",
            };
        case CATEGORY_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case CATEGORY_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case CATEGORY_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case CATEGORY_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case CATEGORY_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case CATEGORY_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case CATEGORY_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case CATEGORY_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

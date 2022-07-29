const MARKETS_FETCH_REQUEST = "MARKETS_FETCH_REQUEST";
const MARKETS_FETCH_SUCCESS = "MARKETS_FETCH_SUCCESS";
const MARKETS_FETCH_FAIL = "MARKETS_FETCH_FAIL";
const MARKETS_CREATE_REQUEST = "MARKETS_CREATE_REQUEST";
const MARKETS_CREATE_SUCCESS = "MARKETS_CREATE_SUCCESS";
const MARKETS_CREATE_FAIL = "MARKETS_CREATE_FAIL";
const MARKETS_DELETE_REQUEST = "MARKETS_DELETE_REQUEST";
const MARKETS_DELETE_SUCCESS = "MARKETS_DELETE_SUCCESS";
const MARKETS_DELETE_FAIL = "MARKETS_DELETE_FAIL";
const MARKETS_DELETE_RESET = "MARKETS_DELETE_RESET";

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
        case MARKETS_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case MARKETS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action.payload,
                error: "",
            };
        case MARKETS_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case MARKETS_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case MARKETS_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case MARKETS_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case MARKETS_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case MARKETS_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case MARKETS_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case MARKETS_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

const MARKETS_SEARCH_UPDATE_QUERY = "MARKETS_SEARCH_UPDATE_QUERY";
const MARKETS_SEARCH_FETCH_REQUEST = "MARKETS_SEARCH_FETCH_REQUEST";
const MARKETS_SEARCH_FETCH_SUCCESS = "MARKETS_SEARCH_FETCH_SUCCESS";
const MARKETS_SEARCH_FETCH_FAIL = "MARKETS_SEARCH_FETCH_FAIL";
const MARKETS_SEARCH_SEARCH_REQUEST = "MARKETS_SEARCH_SEARCH_REQUEST";
const MARKETS_SEARCH_SEARCH_SUCCESS = "MARKETS_SEARCH_SEARCH_SUCCESS";
const MARKETS_SEARCH_SEARCH_FAIL = "MARKETS_SEARCH_SEARCH_FAIL";
const MARKETS_SEARCH_DELETE_REQUEST = "MARKETS_SEARCH_DELETE_REQUEST";
const MARKETS_SEARCH_DELETE_SUCCESS = "MARKETS_SEARCH_DELETE_SUCCESS";
const MARKETS_SEARCH_DELETE_FAIL = "MARKETS_SEARCH_DELETE_FAIL";
const MARKETS_SEARCH_DELETE_RESET = "MARKETS_SEARCH_DELETE_RESET";

const initialState = {
    markets: [],
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MARKETS_SEARCH_UPDATE_QUERY:
            return { ...state, query: action.payload };
        case MARKETS_SEARCH_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case MARKETS_SEARCH_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                markets: action.payload,
                error: "",
            };
        case MARKETS_SEARCH_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case MARKETS_SEARCH_SEARCH_REQUEST:
            return { ...state, loadingSearch: true };
        case MARKETS_SEARCH_SEARCH_SUCCESS:
            return { ...state, loadingSearch: false };
        case MARKETS_SEARCH_SEARCH_FAIL:
            return { ...state, loadingSearch: false, error: action.payload };
        case MARKETS_SEARCH_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case MARKETS_SEARCH_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case MARKETS_SEARCH_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case MARKETS_SEARCH_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

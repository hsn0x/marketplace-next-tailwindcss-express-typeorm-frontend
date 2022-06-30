const MARKET_FETCH_REQUEST = "MARKET_FETCH_REQUEST";
const MARKET_FETCH_SUCCESS = "MARKET_FETCH_SUCCESS";
const MARKET_FETCH_FAIL = "MARKET_FETCH_FAIL";
const MARKET_CREATE_REQUEST = "MARKET_CREATE_REQUEST";
const MARKET_CREATE_SUCCESS = "MARKET_CREATE_SUCCESS";
const MARKET_CREATE_FAIL = "MARKET_CREATE_FAIL";
const MARKET_DELETE_REQUEST = "MARKET_DELETE_REQUEST";
const MARKET_DELETE_SUCCESS = "MARKET_DELETE_SUCCESS";
const MARKET_DELETE_FAIL = "MARKET_DELETE_FAIL";
const MARKET_DELETE_RESET = "MARKET_DELETE_RESET";

const initialState = {
    market: null,
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MARKET_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case MARKET_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                market: action.payload,
                error: "",
            };
        case MARKET_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case MARKET_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case MARKET_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case MARKET_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case MARKET_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case MARKET_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case MARKET_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case MARKET_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

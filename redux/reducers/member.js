const MEMBER_FETCH_REQUEST = "MEMBER_FETCH_REQUEST";
const MEMBER_FETCH_SUCCESS = "MEMBER_FETCH_SUCCESS";
const MEMBER_FETCH_FAIL = "MEMBER_FETCH_FAIL";
const MEMBER_CREATE_REQUEST = "MEMBER_CREATE_REQUEST";
const MEMBER_CREATE_SUCCESS = "MEMBER_CREATE_SUCCESS";
const MEMBER_CREATE_FAIL = "MEMBER_CREATE_FAIL";
const MEMBER_DELETE_REQUEST = "MEMBER_DELETE_REQUEST";
const MEMBER_DELETE_SUCCESS = "MEMBER_DELETE_SUCCESS";
const MEMBER_DELETE_FAIL = "MEMBER_DELETE_FAIL";
const MEMBER_DELETE_RESET = "MEMBER_DELETE_RESET";

const initialState = {
    member: null,
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MEMBER_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case MEMBER_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                member: action.payload,
                error: "",
            };
        case MEMBER_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case MEMBER_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case MEMBER_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case MEMBER_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case MEMBER_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case MEMBER_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case MEMBER_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case MEMBER_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

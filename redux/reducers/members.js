const MEMBERS_FETCH_REQUEST = "MEMBERS_FETCH_REQUEST";
const MEMBERS_FETCH_SUCCESS = "MEMBERS_FETCH_SUCCESS";
const MEMBERS_FETCH_FAIL = "MEMBERS_FETCH_FAIL";
const MEMBERS_CREATE_REQUEST = "MEMBERS_CREATE_REQUEST";
const MEMBERS_CREATE_SUCCESS = "MEMBERS_CREATE_SUCCESS";
const MEMBERS_CREATE_FAIL = "MEMBERS_CREATE_FAIL";
const MEMBERS_DELETE_REQUEST = "MEMBERS_DELETE_REQUEST";
const MEMBERS_DELETE_SUCCESS = "MEMBERS_DELETE_SUCCESS";
const MEMBERS_DELETE_FAIL = "MEMBERS_DELETE_FAIL";
const MEMBERS_DELETE_RESET = "MEMBERS_DELETE_RESET";

const initialState = {
    members: [],
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MEMBERS_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case MEMBERS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                members: action.payload,
                error: "",
            };
        case MEMBERS_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case MEMBERS_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case MEMBERS_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case MEMBERS_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case MEMBERS_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case MEMBERS_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case MEMBERS_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case MEMBERS_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;

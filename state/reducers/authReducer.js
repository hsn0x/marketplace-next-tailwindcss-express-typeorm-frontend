const initialState = {
    email: "",
    password: "",
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_EMAIL":
            return { ...state, email: action.payload };
        case "UPDATE_PASSWORD":
            return { ...state, password: action.payload };
        case "SIGN_IN":
            return action.payload;
        case "SIGN_UP":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;

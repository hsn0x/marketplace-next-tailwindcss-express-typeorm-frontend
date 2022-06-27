const updateEmail = (email) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_EMAIL",
            payload: email,
        });
    };
};

const updatePassword = (password) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PASSWORD",
            payload: password,
        });
    };
};

const signIn = (password) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_SIGN_IN",
            payload: password,
        });
    };
};

const signUp = (password) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_SIGN_UP",
            payload: password,
        });
    };
};

export { updateEmail, updatePassword };

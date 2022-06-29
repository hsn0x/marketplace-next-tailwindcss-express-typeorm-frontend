const updateAuth = (auth) => {
    return (dispatch) =>
        dispatch({
            type: "UPDATE_AUTH",
            payload: auth,
        });
};

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

export { updateAuth, updateEmail, updatePassword };

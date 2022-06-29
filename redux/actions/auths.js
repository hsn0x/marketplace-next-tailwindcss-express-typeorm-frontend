export const updateIsAuthenticated = (isAuthenticated) => {
    return (dispatch) =>
        dispatch({
            type: "UPDATE_IS_AUTH",
            payload: isAuthenticated,
        });
};

export const updateAuth = (auth) => {
    return (dispatch) =>
        dispatch({
            type: "UPDATE_AUTH",
            payload: auth,
        });
};

export const updateEmail = (email) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_EMAIL",
            payload: email,
        });
    };
};

export const updatePassword = (password) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PASSWORD",
            payload: password,
        });
    };
};

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_MARKET":
            return action.payload;
        case "GET_MARKETS":
            return action.payload;
        case "ADD_MARKET":
            return action.payload;
        case "UPDATE_MARKET":
            return action.payload;
        case "DELETE_MARKET":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;

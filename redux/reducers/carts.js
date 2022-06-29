const reducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_CART":
            return action.payload;
        case "GET_CARTS":
            return action.payload;
        case "ADD_CART":
            return action.payload;
        case "UPDATE_CART":
            return action.payload;
        case "DELETE_CART":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;

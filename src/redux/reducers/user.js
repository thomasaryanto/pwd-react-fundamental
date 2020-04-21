const init_state = {
    id: 0,
    username: "",
};

export default (state = init_state, action) => {
    if (action.type == "LOGIN_USERNAME") {
        return { ...state, username: action.payload }
    }
    else {
        return { ...state }
    }
}
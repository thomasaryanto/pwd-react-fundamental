const init_state = {
    id: 0,
    username: "",
    role: "",
    fullName: "",
    errMsg: ""
};

export default (state = init_state, action) => {
    if (action.type === "LOGIN_USERNAME") {
        return { ...state, username: action.payload }
    }
    else if (action.type === "ON_AUTH_SUCCESS") {
        const { id, username, role, fullName } = action.payload
        return { ...state, id, username, role, fullName, errMsg: "" }
    }
    else if (action.type === "ON_AUTH_FAIL") {
        return { ...state, errMsg: action.payload }
    }
    else if (action.type === "ON_AUTH_LOGOUT") {
        return { ...state, id: 0, username: "", role: "", fullName: "" }
    }
    else {
        return { ...state }
    }
}
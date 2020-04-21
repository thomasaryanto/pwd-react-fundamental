export const todoInputHandler = (text) => {
    return {
        type: "ON_CHANGE_TODO_INPUT",
        payload: text
    }
}

export const todoListHandler = (text) => {
    return {
        type: "ON_CHANGE_TODO_LIST",
        payload: text
    }
}
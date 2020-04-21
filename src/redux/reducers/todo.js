const init_state = {
    todoInput: "test nih",
    todoList: [],
};

export default (state = init_state, action) => {
    if (action.type == "ON_CHANGE_TODO_INPUT") {
        return { ...state, todoInput: action.payload }
    }
    else if (action.type == "ON_CHANGE_TODO_LIST") {
        return { ...state, todoList: [...state.todoList, action.payload] }
    }
    else {
        return { ...state }
    }
}
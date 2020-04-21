export const userInputHandler = (text) => {
    return {
        type: "LOGIN_USERNAME",
        payload: text
    }
}
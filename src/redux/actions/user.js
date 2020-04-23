import Axios from "axios"
import { API_URL } from "../../constants/API";

export const userInputHandler = (text) => {
    return {
        type: "LOGIN_USERNAME",
        payload: text
    }
}

export const loginHandler = (userData) => {
    const { username, password } = userData

    return (dispatch) => {
        Axios.get(API_URL + "/users", {
            params: {
                username,
                password
            }
        })
            .then((res) => {
                if (res.data.length > 0) {
                    dispatch({
                        type: "ON_AUTH_SUCCESS",
                        payload: res.data[0]
                    })
                }
                else {
                    dispatch({
                        type: "ON_AUTH_FAIL",
                        payload: "Username / Password salah!"
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: "ON_AUTH_FAIL",
                    payload: "Terjadi kesalahan saat mengambil data!\n" + err
                })
            })
    }
}

export const registerHandler = (userData) => {
    const { username, password, repeat_password, role, fullName } = userData

    if (username && password && repeat_password && role && fullName) {
        if (password === repeat_password) {
            return (dispatch) => {
                Axios.get(API_URL + "/users", {
                    params: {
                        username
                    }
                })
                    .then((res) => {

                        if (res.data.length > 0) {
                            dispatch({
                                type: "ON_AUTH_FAIL",
                                payload: "Username sudah terpakai!"
                            })
                        }
                        else {
                            Axios.post(API_URL + "/users", {
                                username,
                                password,
                                role,
                                fullName
                            })
                                .then(() => {
                                    dispatch({
                                        type: "ON_AUTH_SUCCESS",
                                        payload: { username, password }
                                    })
                                    alert("Registrasi berhasil!")
                                })
                                .catch((err) => {
                                    dispatch({
                                        type: "ON_AUTH_FAIL",
                                        payload: "Terjadi kesalahan saat mengambil data!\n" + err
                                    })
                                })
                        }
                    })
                    .catch((err) => {
                        dispatch({
                            type: "ON_AUTH_FAIL",
                            payload: "Terjadi kesalahan saat mengambil data!\n" + err
                        })
                    })
            }
        }
        else {
            return (dispatch) => {
                dispatch({
                    type: "ON_AUTH_FAIL",
                    payload: "Password tidak cocok!"
                })
            }
        }
    }
    else {
        return (dispatch) => {
            dispatch({
                type: "ON_AUTH_FAIL",
                payload: "Data belum lengkap!"
            })
        }
    }

}

export const userKeepLogin = (userData) => {
    return (dispatch) => {
        Axios.get(API_URL + "/users", {
            params: {
                id: userData.id
            }
        })
            .then((res) => {
                if (res.data.length > 0) {
                    dispatch({
                        type: "ON_AUTH_SUCCESS",
                        payload: res.data[0]
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const logoutHandler = () => {
    return {
        type: "ON_AUTH_LOGOUT"
    }
}

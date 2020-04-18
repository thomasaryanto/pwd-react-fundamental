import React from "react"
import { Redirect } from "react-router-dom"
import Axios from "axios"
import { API_URL } from "../../constants/API";

class LoginScreen extends React.Component {

    state = {
        log_username: "",
        log_password: "",
        is_login: false
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    login = () => {
        const { log_username, log_password } = this.state

        Axios.get(API_URL + "/users", {
            params: {
                username: log_username,
                password: log_password
            }
        })
            .then((res) => {
                if (Object.keys(res.data).length > 0) {
                    this.setState({ is_login: true })
                }
                else {
                    alert("User tidak ditemukan / password salah!")
                }
            })
            .catch((err) => {
                alert("Terjadi kesalahan saat mengambil data!\n" + err)
            })
    }


    render() {
        const { log_username, log_password, is_login } = this.state

        if (is_login) {
            return <Redirect to={"profile/" + log_username} />
        }

        return (
            <div className="App container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-4 ">
                        <h2>Login</h2>
                        <br />
                        <div className="card align-items-center">
                            <br />
                            <input onChange={(e) => this.inputHandler(e, "log_username")} className="form-control col-8 mt-2" type="text" value={log_username} placeholder="Username" />
                            <input onChange={(e) => this.inputHandler(e, "log_password")} className="form-control col-8 mt-2" type="password" value={log_password} placeholder="Password" />
                            <input onClick={this.login} className="form-control btn btn-primary col-8 mt-2" type="button" value="Login" />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginScreen
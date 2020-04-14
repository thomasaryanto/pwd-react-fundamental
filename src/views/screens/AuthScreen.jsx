import React from "react"

class AuthScreen extends React.Component {

    state = {
        userdata: [],
        reg_username: "",
        reg_password: "",
        reg_repeat_password: "",
        log_username: "",
        log_password: "",
        is_login: ""
    }

    render() {
        const {userdata, reg_username, reg_password, reg_repeat_password, log_username, log_password, is_login} = this.state

        const inputHandler = (event, field) => {
            this.setState({[field]: event.target.value})
        }

        const register = () => {
            if (reg_username && reg_password && reg_repeat_password) {
                if (reg_password === reg_repeat_password) {
                    this.setState({ userdata: [...this.state.userdata, ...[[reg_username, reg_password]]], reg_username: "", reg_password: "", reg_repeat_password: ""})
                }
                else {
                    alert("Password tidak cocok!")
                }
            }
            else {
                alert("Data belum lengkap!")
            }
        }

        const login = () => {
            if (log_username && log_password) {
                for (let i = 0; i < userdata.length; i++) {
                    if (userdata[i][0] === log_username && userdata[i][1] === log_password) {
                        return this.setState({log_username: "", log_password: "", is_login: userdata[i][0]})
                    }
                }
                this.setState({log_username: "", log_password: "", is_login: ""})
                alert("Username / Password salah!")
            }
            else {
                alert("Data belum lengkap!")
            }
        }

        return (
            <div className="row justify-content-md-center">
                <div className="col-4 ">
                    <h2>Authentication</h2>
                    <br/><br/>
                    <div className="card align-items-center">
                        <br/>
                        <h4>Register</h4>
                        <input onChange={(e) => inputHandler(e, "reg_username")} value={reg_username} className="form-control col-8 mt-2" type="text" placeholder="Username"/>
                        <input onChange={(e) => inputHandler(e, "reg_password")} value={reg_password} className="form-control col-8 mt-2" type="password" placeholder="Password"/>
                        <input onChange={(e) => inputHandler(e, "reg_repeat_password")} value={reg_repeat_password} className="form-control col-8 mt-2" type="password" placeholder="Repeat Password"/>
                        <input onClick={register} className="form-control btn btn-primary col-8 mt-2" type="button" value="Register"/>
                        <br/>
                    </div>
                    <br/>
                    <div className="card align-items-center">
                        <br/>
                        <h4>Login</h4>
                        <input onChange={(e) => inputHandler(e, "log_username")} className="form-control col-8 mt-2" type="text" value={log_username} placeholder="Username"/>
                        <input onChange={(e) => inputHandler(e, "log_password")} className="form-control col-8 mt-2" type="password" value={log_password} placeholder="Password"/>
                        <input onClick={login} className="form-control btn btn-primary col-8 mt-2" type="button" value="Login"/>
                        <br/>
                    </div>
                    <br/>
                    { is_login ? (<h3>Welcome, {is_login} !</h3>) : null }
                </div>
            </div>
        )
    }
}

export default AuthScreen
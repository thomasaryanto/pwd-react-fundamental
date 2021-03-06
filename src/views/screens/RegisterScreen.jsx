import React from "react"
import { Redirect } from "react-router-dom"
import Axios from "axios"
import { API_URL } from "../../constants/API";
import { Spinner } from "reactstrap"
import { connect } from "react-redux"
import { registerHandler } from "../../redux/actions"

class RegisterScreen extends React.Component {

    state = {
        reg_username: "",
        reg_password: "",
        reg_repeat_password: "",
        reg_role: "",
        reg_fullname: "",
        is_register: false,
        registering: false
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    register = () => {
        const { reg_username, reg_password, reg_repeat_password, reg_role, reg_fullname } = this.state

        // this.setState({ registering: true })

        const userData = {
            username: reg_username,
            password: reg_password,
            repeat_password: reg_repeat_password,
            role: reg_role,
            fullName: reg_fullname
        }
        this.props.registerHandler(userData)

        // this.setState({ registering: false })
    }


    render() {
        const { reg_username, reg_password, reg_repeat_password, reg_role, reg_fullname, is_register, registering } = this.state

        if (is_register) {
            return <Redirect to="login" />
        }

        return (
            <div className="App container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-4 ">
                        <h2>Register</h2>
                        <br />
                        {
                            this.props.user.errMsg != "" ?
                                (
                                    <div class="alert alert-danger" role="alert">
                                        {this.props.user.errMsg}
                                    </div>
                                )
                                : null
                        }
                        <div className="card align-items-center">
                            <br />
                            <select defaultValue="" onChange={(e) => this.inputHandler(e, "reg_role")} value={reg_role} className="form-control col-8 mt-2">
                                <option value="">Select Role...</option>
                                <option value="admin">Admin</option>
                                <option value="operator">Operator</option>
                                <option value="user">User</option>
                            </select>
                            <input onChange={(e) => this.inputHandler(e, "reg_fullname")} value={reg_fullname} className="form-control col-8 mt-2" type="text" placeholder="Full Name" />
                            <input onChange={(e) => this.inputHandler(e, "reg_username")} value={reg_username} className="form-control col-8 mt-2" type="text" placeholder="Username" />
                            <input onChange={(e) => this.inputHandler(e, "reg_password")} value={reg_password} className="form-control col-8 mt-2" type="password" placeholder="Password" />
                            <input onChange={(e) => this.inputHandler(e, "reg_repeat_password")} value={reg_repeat_password} className="form-control col-8 mt-2" type="password" placeholder="Repeat Password" />
                            {
                                registering ? (<Spinner color="primary" />) : (<input onClick={this.register} className="form-control btn btn-primary col-8 mt-2" type="button" value="Register" />)
                            }
                            {/* <input onClick={this.register} className="form-control btn btn-primary col-8 mt-2" type="button" value="Register" />
                            <Spinner color="primary" /> */}
                            <br />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({ user: state.user }), { registerHandler })(RegisterScreen)
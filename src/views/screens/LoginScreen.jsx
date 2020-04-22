import React from "react"
import Axios from "axios"
import swal from 'sweetalert';
import { Redirect } from "react-router-dom"
import { API_URL } from "../../constants/API";
import { Spinner } from "reactstrap"
import { connect } from "react-redux"
import { userInputHandler, loginHandler } from "../../redux/actions"

class LoginScreen extends React.Component {

    state = {
        log_username: "",
        log_password: "",
        is_login: false,
        is_loading: false
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    login = () => {
        const { log_username, log_password } = this.state

        const userData = {
            username: log_username,
            password: log_password
        }

        //this.setState({ is_loading: true })

        this.props.loginHandler(userData)

        //this.setState({ is_loading: false })

    }


    render() {
        const { log_username, log_password, is_login, is_loading } = this.state

        if (is_login) {
            return <Redirect to={"profile/" + log_username} />
        }

        return (
            <div className="App container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-4 ">

                        {this.props.user.errMsg != "" ? (<b>error</b>) : null}

                        <h2>Login</h2>
                        <p>username: {this.props.user.username}</p>
                        <br />
                        <div className="card align-items-center">
                            <br />
                            <input onChange={(e) => this.inputHandler(e, "log_username")} className="form-control col-8 mt-2" type="text" value={log_username} placeholder="Username" />
                            <input onChange={(e) => this.inputHandler(e, "log_password")} className="form-control col-8 mt-2 mb-2" type="password" value={log_password} placeholder="Password" />
                            {
                                is_loading ? (<Spinner color="primary" />) : (<input onClick={this.login} className="form-control btn btn-primary col-8 mt-2" type="button" value="Login" />)
                            }

                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({ user: state.user }), { userInputHandler, loginHandler })(LoginScreen)
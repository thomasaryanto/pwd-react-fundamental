import React from "react"
import Axios from "axios"
import swal from 'sweetalert';
import { Redirect } from "react-router-dom"
import { API_URL } from "../../constants/API";
import { Spinner } from "reactstrap"
import { connect } from "react-redux"
import { userInputHandler, loginHandler } from "../../redux/actions"
import Cookie from 'universal-cookie';

const cookieObject = new Cookie();

class LoginScreen extends React.Component {

    state = {
        log_username: "",
        log_password: "",
        is_loading: false
    }

    componentDidUpdate() {
        if (this.props.user.id) {
            cookieObject.set("authData", JSON.stringify(this.props.user))
        }
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

        // this.setState({ is_login: true })

    }

    render() {

        const { log_username, log_password, is_loading } = this.state

        if (this.props.user.id) {
            return <Redirect to={"profile/" + this.props.user.username} />
        }

        return (
            <div className="App container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-4 ">
                        <h2>Login</h2>
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
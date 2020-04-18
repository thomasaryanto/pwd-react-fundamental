import React from "react"
import { Link, Redirect } from "react-router-dom"
import Axios from "axios"
import { API_URL } from "../../constants/API";

class AuthScreen extends React.Component {

    state = {
        reg_username: "",
        reg_password: "",
        reg_repeat_password: "",
        reg_role: "",
        reg_fullname: "",
        log_username: "",
        log_password: "",
        is_login: "",
        idx_edit: ""
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    register = () => {
        const { reg_username, reg_password, reg_repeat_password, reg_role, reg_fullname } = this.state

        if (reg_username && reg_password && reg_repeat_password) {
            if (reg_password === reg_repeat_password) {

                Axios.get(API_URL + "/users", {
                    params: {
                        username: reg_username
                    }
                })
                    .then((res) => {
                        if (Object.keys(res.data).length > 0) {
                            alert("Username sudah terpakai!")
                        }
                        else {
                            Axios.post(API_URL + "/users", {
                                username: reg_username,
                                password: reg_password,
                                role: reg_role,
                                fullName: reg_fullname
                            })
                                .then(() => {
                                    alert("Registrasi berhasil! Silahkan login...")
                                    this.setState({ reg_role: "", reg_fullname: "", reg_username: "", reg_password: "", reg_repeat_password: "" })
                                })
                                .catch((err) => {
                                    alert("Terjadi kesalahan saat mengambil data!\n" + err)
                                })
                        }
                    })
                    .catch((err) => {
                        alert("Terjadi kesalahan saat mengambil data!\n" + err)
                    })

            }
            else {
                alert("Password tidak cocok!")
            }
        }
        else {
            alert("Data belum lengkap!")
        }
    }

    renderTable = () => {
        const { userdata, idx_edit } = this.state

        return userdata.map((val, idx) => {
            if (idx === idx_edit) {
                return (
                    <>
                        <tr>
                            <td>{idx + 1}</td>
                            <td><input type="text" placeholder={val[0]} name="test" /></td>
                            <td><button className="btn btn-info" onClick={() => this.setState({ idx_edit: "" })}>Save</button></td>
                        </tr>
                    </>
                )
            }
            else {
                return (
                    <>
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{val[0]}</td>
                            <td><button className={(idx + 1) % 2 == 0 ? ("btn btn-warning") : ("btn btn-danger")} onClick={() => this.setState({ idx_edit: idx })}>Edit</button></td>
                            <td><button className={(idx + 1) % 2 == 0 ? ("btn btn-warning") : ("btn btn-danger")} onClick={() => this.deleteUser(idx)}>Delete</button></td>
                            <td><Link to={"profile/" + val[0]}><button className={(idx + 1) % 2 == 0 ? ("btn btn-warning") : ("btn btn-danger")}>Profile</button></Link></td>
                        </tr>
                    </>
                )
            }
        })
    }

    deleteUser = (index) => {
        const { userdata } = this.state

        const rows = [...userdata]
        rows.splice(index, 1)
        this.setState({ userdata: rows })
    }

    login = () => {
        const { userdata, log_username, log_password } = this.state

        Axios.get(API_URL + "/users", {
            params: {
                username: log_username,
                password: log_password
            }
        })
            .then((res) => {
                if (Object.keys(res.data).length > 0) {
                    this.setState({ is_login: res.data[0].username })
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
        const { reg_username, reg_password, reg_repeat_password, reg_role, reg_fullname, log_username, log_password, is_login } = this.state

        if (is_login) {
            return <Redirect to={"profile/" + log_username} />
        }

        return (
            <div className="App container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-4 ">
                        <h2>Authentication</h2>
                        <br /><br />
                        <div className="card align-items-center">
                            <br />
                            <h4>Register</h4>
                            <select onChange={(e) => this.inputHandler(e, "reg_role")} value={reg_role} className="form-control col-8 mt-2">
                                <option value="" selected>Select Role...</option>
                                <option value="admin">Admin</option>
                                <option value="operator">Operator</option>
                                <option value="user">User</option>
                            </select>
                            <input onChange={(e) => this.inputHandler(e, "reg_fullname")} value={reg_fullname} className="form-control col-8 mt-2" type="text" placeholder="Full Name" />
                            <input onChange={(e) => this.inputHandler(e, "reg_username")} value={reg_username} className="form-control col-8 mt-2" type="text" placeholder="Username" />
                            <input onChange={(e) => this.inputHandler(e, "reg_password")} value={reg_password} className="form-control col-8 mt-2" type="password" placeholder="Password" />
                            <input onChange={(e) => this.inputHandler(e, "reg_repeat_password")} value={reg_repeat_password} className="form-control col-8 mt-2" type="password" placeholder="Repeat Password" />
                            <input onClick={this.register} className="form-control btn btn-primary col-8 mt-2" type="button" value="Register" />
                            <br />
                        </div>
                        <br />

                        {/* <table className="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Username</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table> */}

                        <div className="card align-items-center">
                            <br />
                            <h4>Login</h4>
                            <input onChange={(e) => this.inputHandler(e, "log_username")} className="form-control col-8 mt-2" type="text" value={log_username} placeholder="Username" />
                            <input onChange={(e) => this.inputHandler(e, "log_password")} className="form-control col-8 mt-2" type="password" value={log_password} placeholder="Password" />
                            <input onClick={this.login} className="form-control btn btn-primary col-8 mt-2" type="button" value="Login" />
                            <br />
                        </div>

                        <br />
                        {is_login ? (<h3>Welcome, {is_login} !</h3>) : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthScreen
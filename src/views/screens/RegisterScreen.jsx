import React from "react"
import { Redirect } from "react-router-dom"
import Axios from "axios"
import { API_URL } from "../../constants/API";

class RegisterScreen extends React.Component {

    state = {
        reg_username: "",
        reg_password: "",
        reg_repeat_password: "",
        reg_role: "",
        reg_fullname: "",
        is_register: false
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    register = () => {
        const { reg_username, reg_password, reg_repeat_password, reg_role, reg_fullname, is_register } = this.state

        if (reg_username && reg_password && reg_repeat_password && reg_role && reg_fullname) {
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
                                    alert("Registrasi berhasil! Mengarahkan ke halaman login...")
                                    this.setState({ is_register: true })
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


    render() {
        const { reg_username, reg_password, reg_repeat_password, reg_role, reg_fullname, is_register } = this.state

        if (is_register) {
            return <Redirect to="login" />
        }

        return (
            <div className="App container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-4 ">
                        <h2>Register</h2>
                        <br /><br />
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
                            <input onClick={this.register} className="form-control btn btn-primary col-8 mt-2" type="button" value="Register" />
                            <br />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterScreen
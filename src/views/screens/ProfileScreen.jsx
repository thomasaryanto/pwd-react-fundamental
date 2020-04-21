import React from "react"
import Axios from "axios"
import { API_URL } from "../../constants/API";

import avatar from '../../images/profile.png'

class ProfileScreen extends React.Component {
    state = {
        username: "",
        fullname: "",
        role: "",
    }

    componentDidMount() {
        Axios.get(API_URL + "/users", {
            params: {
                username: this.props.match.params.username
            }
        })
            .then((res) => {
                if (Object.keys(res.data).length > 0) {
                    this.setState({ username: res.data[0].username, fullname: res.data[0].fullName, role: res.data[0].role })
                }
                else {
                    alert("User tidak ditemukan!")
                }
            })
            .catch((err) => {
                alert("Terjadi kesalahan saat mengambil data!\n" + err)
            })
    }

    render() {
        const { username, fullname, role } = this.state
        return (
            <div className="App container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-4 ">
                        <h2>Profile</h2>
                        <br />
                        <div className="card align-items-center">
                            <br />
                            <img src={avatar} width="100" alt="Profile" />
                            <h2>{fullname}</h2>
                            <br />
                            <p>Username : {username} </p>
                            <p>Role : {role}</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileScreen
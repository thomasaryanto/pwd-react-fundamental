import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="navbar-brand" to="/">Home</Link>
                        <Link class="nav-item nav-link" to="counter">Counter</Link>
                        <Link class="nav-item nav-link" to="input">Input</Link>
                        <Link class="nav-item nav-link" to="lifecycle">Lifecycle</Link>
                    </div>
                    <div class="navbar-nav ml-auto">
                        <Link class="nav-item nav-link" to="register">Register</Link>
                        <Link class="nav-item nav-link" to="login">Login</Link>
                        <Link class="nav-item nav-link" to="profile">Profile</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
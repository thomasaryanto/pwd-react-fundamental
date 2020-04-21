import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Navbar extends React.Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/counter">Counter</Link>
                        <Link className="nav-item nav-link" to="/input">Input</Link>
                        <Link className="nav-item nav-link" to="/lifecycle">Lifecycle</Link>
                    </div>
                    <div className="navbar-nav ml-auto">
                        {
                            this.props.user.username == "" ?
                                (
                                    <>
                                        <Link className="nav-item nav-link" to="/register">Register</Link>
                                        <Link className="nav-item nav-link" to="/login">Login</Link>
                                    </>
                                ) :
                                (
                                    <Link className="nav-item nav-link" to={"/profile/" + this.props.user.username}>Hello, {this.props.user.username}!</Link>
                                )
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

//state di mapstatetoprops isinya objek yang ada di combinereducers

const mapStateToProps = state => {
    return {
        todo: state.todo,
        user: state.user
    }
}

export default connect(mapStateToProps)(Navbar)
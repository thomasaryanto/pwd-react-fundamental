import React from "react"
import {Link} from "react-router-dom"

class InputScreen extends React.Component {
    state = {
        username: "",
        email: "",
        length: 0
    }
    
    inputHandler = (event, field) => {
        this.setState({[field]: event.target.value})
    }

    render() {
        const {username, email, length} = this.state


        return (
            <div className="App container-fluid">
                <h1>Input Screen</h1>
                <h3>Welcome {username}</h3>
                <h3>Email {email}</h3>
                <input onChange={(e) => this.inputHandler(e, "username")} type="text" placeholder="Username"/>
                <br/>
                <input onChange={(e) => this.inputHandler(e, "email")} type="text" placeholder="Email"/>
                <br/>
                <textarea onChange={(e) => this.setState({length: e.target.value.length})} cols="30" rows="10"></textarea>
                <p>{length} / 140</p>
                <Link to={"profile/"+this.state.username}><button>Login</button></Link>
            </div>
        )
    }
}

export default InputScreen
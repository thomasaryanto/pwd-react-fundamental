import React from "react"

class InputScreen extends React.Component {
    state = {
        username: "",
        email: "",
        length: 0
    }

    render() {
        const {username, email, length} = this.state

        const inputHandler = (event, field) => {
            this.setState({[field]: event.target.value})
        }

        return (
            <div>
                <h1>Input Screen</h1>
                <h3>Welcome {username}</h3>
                <h3>Email {email}</h3>
                <input onChange={(e) => inputHandler(e, "username")} type="text" placeholder="Username"/>
                <br/>
                <input onChange={(e) => inputHandler(e, "email")} type="text" placeholder="Email"/>
                <br/>
                <textarea onChange={(e) => this.setState({length: e.target.value.length})} cols="30" rows="10"></textarea>
                <p>{length} / 140</p>
            </div>
        )
    }
}

export default InputScreen
import React from "react"
import { connect } from "react-redux"
import { todoInputHandler, todoListHandler, userInputHandler, loginHandler } from "../../redux/actions"



class TodoReduxScreen extends React.Component {
    state = {
        todoText: "",
    }

    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    renderTodo = () => {
        return this.props.todo.todoList.map((val) => {
            return (
                <>
                    {val}
                    <br />
                </>
            )
        })
    }

    render() {
        return (
            <div className="App container-fluid">
                <h1>Todo Screen</h1>
                {/* <h2>{this.props.todo.todoInput}</h2> */}
                {/* <input type="text" className="form-control" placeholder="username input" onChange={(e) => this.props.userInputHandler(e.target.value)} /> */}
                {/* <input type="text" className="form-control" placeholder="todo input" onChange={(e) => this.inputHandler(e, "todoText")} />
                <br />
                <input type="button" value="Add todo" className="btn btn-primary" onClick={(e) => this.props.todoListHandler(this.state.todoText)} />
                <br /><hr />
                {this.renderTodo()} */}
                <p>Testing 1 : {this.props.user.testing}</p>
                <p>Testing 1 : {this.props.user.testing2}</p>

                <input type="button" value="testing" className="btn btn-primary" onClick={this.props.onLogin} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo,
        user: state.user,
    }
}

const mapDispatchToProps = {
    todoInputHandler: todoInputHandler,
    userInputHandler: userInputHandler,
    todoListHandler: todoListHandler,
    onLogin: loginHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen)
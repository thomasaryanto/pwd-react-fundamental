import React from "react";

class CounterScreen extends React.Component {
    state = {
        counter1 : 0,
        counter2 : 0,
        counter3 : 0
    }

    render() {
        const changeAll = (op) => {
            if (op) {
                this.setState({counter1: this.state.counter1 + 1})
                this.setState({counter2: this.state.counter2 + 1})
                this.setState({counter3: this.state.counter3 + 1})
            }
            else {
                this.setState({counter1: this.state.counter1 - 1})
                this.setState({counter2: this.state.counter2 - 1})
                this.setState({counter3: this.state.counter3 - 1})
            }
        }

        const resetAll = () => {
            this.setState({counter1: 0})
            this.setState({counter2: 0})
            this.setState({counter3: 0})
        }

        return (
            <div className="App container-fluid">
                <div className="row">
                    <div className="col-4">
                        <h1>Counter 1 = {this.state.counter1}</h1>
                        <input className="btn btn-primary" type="button" value="+" onClick={() => this.setState({counter1: this.state.counter1 + 1})} />
                        <input className="btn btn-danger" type="button" value="-" onClick={() => this.setState({counter1: this.state.counter1 - 1})} />
                    </div>
                    <div className="col-4">
                        <h1>Counter 2 = {this.state.counter2}</h1>
                        <input className="btn btn-primary" type="button" value="+" onClick={() => this.setState({counter2: this.state.counter2 + 1})} />
                        <input className="btn btn-danger" type="button" value="-" onClick={() => this.setState({counter2: this.state.counter2 - 1})} />
                    </div>
                    <div className="col-4">
                        <h1>Counter 3 = {this.state.counter3}</h1>
                        <input className="btn btn-primary" type="button" value="+" onClick={() => this.setState({counter3: this.state.counter3 + 1})} />
                        <input className="btn btn-danger" type="button" value="-" onClick={() => this.setState({counter3: this.state.counter3 - 1})} />
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-12">
                        <h1>All counter</h1>
                        <input className="btn btn-primary" type="button" value="+" onClick={() => changeAll(true)} />
                        <input className="btn btn-danger" type="button" value="-" onClick={() => changeAll(false)} />
                        <br></br>
                        <input className="btn btn-info" type="button" value="RESET" onClick={resetAll} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterScreen;
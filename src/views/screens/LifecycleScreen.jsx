import React from "react"

class LifecycleScreen extends React.Component {
    state = {
        username: "",
        time: new Date(),
    };

    // Functions here
    componentDidMount() {
        this.timer = setInterval(() => this.triggerClock(), 1000);
    }

    triggerClock = () => {
        this.setState({ time: new Date() });
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // Urutan lifecycle
    // render -> didMount

    // re-render !== mount

    // didMount hanya terpanggil setelah render pertama

    render() {
        return (
            <div className="App container-fluid">
                <h1>Lifecycle Screen</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default LifecycleScreen
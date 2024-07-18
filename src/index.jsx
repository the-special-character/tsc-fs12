import React, { Component } from 'react'
import { createRoot } from "react-dom/client";
import "./style.css";
import LifeCycle from "./LifeCycle";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

const test = "hello";
LifeCycle.getDerivedStateFromProps = (props, state) => {
    // console.log("getDerivedStateFromProps Life Cycle");

    console.log(props, state);
    return {
        name: `Mr. ${props.name}`,
        test,
    };
}

export default class App extends Component {
    state = {
        name: "Kush R Vaishnav",
    }

    static getDerivedStateFromError(error) {
        return {
            error,
        }
    }
    componentDidCatch(error, errorinfo) {
        console.log(errorinfo.componentStack);

    }

    render() {
        const { name, error } = this.state;
        return <div>
            {error ? <p>{error.message}</p> : <LifeCycle name={name} />}
            <button type='button' className='btn' onClick={() => {
                this.setState({ name: "Virat Kohli" })
            }}>Change Name</button>
        </div>
    }
}

root.render(<App />)  
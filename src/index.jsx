import React, { Component } from 'react'
import { createRoot } from "react-dom/client";
import "./style.css";
import LifeCycle from "./LifeCycle";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));


export default class App extends Component {
    state = {
        name: "Kush R Vaishnav",
    }
    render() {
        const { name } = this.state;
        return <div>
            <LifeCycle name={name} />
            <button type='button' onClick={() => {
                this.setState({ name: "Virat Kohli" })
            }}>Change Name</button>
        </div>
    }
}

root.render(<App />)
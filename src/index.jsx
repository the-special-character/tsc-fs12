import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import LifeCyle from "./LifeCycle";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

const test = "hello";

LifeCyle.getDerivedStateFromProps = (props, state) => {
  console.log("getDerivedStateFromProps Life Cycle");

  console.log(props, state);

  return {
    name: `Mr. ${props.name}`,
    test,
  };
};

export default class App extends Component {
  state = {
    name: "rohit",
  };

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo.componentStack);
  }

  render() {
    const { name, error } = this.state;
    return (
      <div>
        {error ? <p>{error.message}</p> : <LifeCyle name={name} />}
        <button
          type="button"
          onClick={() => {
            this.setState({ name: "Virat" });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

root.render(<App />);

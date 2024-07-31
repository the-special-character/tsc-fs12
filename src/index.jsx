import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
// import Todo from "./Todo";
import "./style.css";
import { Button } from "./components/ui/button";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

// Life Cycle

// Mounting

// Constructor
// getDerivedStatFromProps
// render
// componentDidMount

// Updating
// getDerivedStatFromProps
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate(not possible with component)
// componentDidUpdate

// UnMouning
// componentWillUnmount

// Error (non possible with function component)
// getDerivedStatFromError
// ComponentDidCatch

const Test = ({ name }) => {
  const [username, setUsername] = useState(name);

  return (
    <>
      <p>{username}</p>
      <Button onClick={() => setUsername("virat")}>Change Name</Button>
    </>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const isMounted = useRef(false);

  const inc = () => {
    setCounter((val) => val + 1);
  };

  const desc = () => {
    setCounter((val) => val - 1);
  };

  useEffect(() => {
    if (isMounted.current) {
      console.log("component Did Mount + Update + both");
    }
  }, [counter]);

  //   Component Did Mount
  useEffect(() => {
    console.log("component Did Mount");
    isMounted.current = true;
  }, []);

  return (
    <div>
      <Button onClick={inc}>+</Button>
      {counter}
      <Button onClick={desc}>-</Button>
      <Test name="Yagnesh" />
    </div>
  );
};

root.render(<App />);

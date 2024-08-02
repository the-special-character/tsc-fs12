import React, { memo, useEffect, useRef, useState } from "react";
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

// Constructor -> achieved
// getDerivedStatFromProps -> achieved
// render -> achieved
// componentDidMount -> achieved

// Updating
// getDerivedStatFromProps -> achieved
// shouldComponentUpdate -> achived
// render -> achieved
// getSnapshotBeforeUpdate(not possible with component)
// componentDidUpdate -> achieved

// UnMouning
// componentWillUnmount

// Error (non possible with function component)
// getDerivedStatFromError
// ComponentDidCatch

const Test = ({ name }) => {
  const [username, setUsername] = useState(name);

  useEffect(() => {
    const mouseMove = () => {
      console.log("mouse Moved");
    };

    document.addEventListener("mousemove", mouseMove);
    // componnentwillunmount
    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <p>{username}</p>
      <Button onClick={() => setUsername("virat")}>Change Name</Button>
    </>
  );
};

const MemorizedTest = memo(Test);

const Counter = ({ initCount }) => {
  const [number, setNumber] = useState(initCount);

  useEffect(() => {
    setNumber(initCount);
  }, [initCount]);

  const inc = () => {
    setNumber((val) => val + 1);
  };

  const desc = () => {
    setNumber((val) => val - 1);
  };

  return (
    <div>
      <Button onClick={inc}>+</Button>
      {number}
      <Button onClick={desc}>-</Button>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const title = useRef(null);
  const mounted = useRef(false);

  const inc = () => {
    setCounter((val) => val + 1);
  };

  const desc = () => {
    setCounter((val) => val - 1);
  };

  // componentDidMount + compnentDidUpdate
  useEffect(() => {
    if (mounted.current) {
      console.log("componentDidMount + compnentDidUpdate");
    }
  }, [counter]);

  // componentDidMount
  useEffect(() => {
    console.log("Mounted");
    console.log(title.current);
    mounted.current = true;
  }, []);

  return (
    <div>
      <h1 ref={title}>hello</h1>
      <Button onClick={inc}>+</Button>
      {counter}
      <Button onClick={desc}>-</Button>
      {counter < 5 && <Test name="Yagnesh" />}

      <Counter initCount={counter} />
    </div>
  );
};

root.render(<App />);

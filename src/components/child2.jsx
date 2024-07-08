import React, { Component, PureComponent } from "react";
import shallowCompare from "react-addons-shallow-compare"; // ES6

// callback
// promises
// generator

export default class Child2 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
    };

    this.controller = new AbortController();
    this.signal = this.controller.signal;
  }

  mouseMove = () => {
    console.log("Mouse Moved");
  };

  loadData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/1", {
        signal: this.signal,
      });
      const json = await res.json();
      this.setState({ data: json });
    } catch (error) {
      this.setState({ error });
    }
  };

  async componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Interval");
    }, 1000);

    this.loadData();
    // document.addEventListener("mousemove", this.mouseMove);
  }

  componentWillUnmount() {
    // document.removeEventListener("mousemove", this.mouseMove);
    this.controller.abort();
    clearInterval(this.interval);
  }

  render() {
    const { count } = this.props;
    const { data, error } = this.state;

    // if (count > 5) throw new Error("Something went wrong");

    return (
      <div>
        <p>Child 2</p>
        <p>{`count: ${count}`}</p>
        {error ? <p>{error.message}</p> : <p>{data?.title}</p>}
      </div>
    );
  }
}
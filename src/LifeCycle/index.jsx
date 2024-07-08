import React, { Component, createRef } from "react";
import Child1 from "../components/child1";
import Child2 from "../components/child2";

// Mounting
// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// Updating
// -> getDerivedStateFromProps
// -> ShouldComponentUpdate // performace Inprove
// -> render
// -> getSnapShopBeforeUpdate
// -> ComponentDidUpdate

// UnMount
// -> ComponentWillUnmount // performace Inprove

// Error

let firstName = "yagnesh";

export default class LifeCyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      count: 0,
      number: 0,
    };

    this.container = createRef();
    // this.state = {
    //   name: `Mr. ${props.name}`,
    // };

    // APi call

    // console.log("constructor Life Cycle");
    // console.log(document.getElementById("container"));
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://fakestoreapi.com/products/1");
      const json = await res.json();
      // console.log(json);
      this.setState({ data: json });
    } catch (error) {}
    // console.log("componentDidMount Life Cycle");
    // console.log(document.getElementById("container"));
    this.container.current.style.color = "red";
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    console.log(this.state);
  }

  render() {
    const { name, data, count, number } = this.state;
    // console.log("render Life Cycle");
    return (
      <div id="container" ref={this.container}>
        <p>{name}</p>
        {data && <p>{data.title}</p>}
        <h1>{count}</h1>
        <h2>{number}</h2>
        <h3>{firstName}</h3>
        <button
          type="button"
          onClick={() => {
            this.setState(({ count, number }) => {
              return {
                count: count + 1,
                number: number + 1,
              };
            });

            // this.setState({
            //   // count: 5,
            //   number: 10,
            // });
          }}
        >
          Click me
        </button>
        <Child1 />
        <Child2 count={count} />
      </div>
    );
  }
}

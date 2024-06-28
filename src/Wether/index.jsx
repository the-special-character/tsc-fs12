import React, { Component } from "react";

export default class Wether extends Component {
  state = {
    list: [
      {
        city: "ahmedabad",
        temp: "30deg",
      },
      {
        city: "ahmedabad",
        temp: "30deg",
      },
      {
        city: "ahmedabad",
        temp: "30deg",
      },
    ],
  };

  render() {
    return <div>Wether</div>;
  }
}

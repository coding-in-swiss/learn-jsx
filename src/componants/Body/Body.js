import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }
  increaseNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  render() {
    return (
      <div className="outercontainer">
        <button className="bodybutton" onClick={() => this.increaseNumber()}>
          {" "}
          Increase number{" "}
        </button>
        {this.state.number}
      </div>
    );
  }
}

export default Body;

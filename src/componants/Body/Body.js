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
        <button className="box-1" />
        <button className="box-2" />
        <button className="box-3" />
        <img
          src="https://wonderfulengineering.com/wp-content/uploads/2014/09/graffiti-wallpaper-11.jpg"
          className="showcase"
        />
        <div />
      </div>
    );
  }
}

export default Body;

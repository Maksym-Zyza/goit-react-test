import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

   // state = {
  //   value: 5,
  // };

  handleIncrement() {
    console.log(' Click + 1')
  };

  handleDecrement () {
    console.log(' Click - 1')
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button className="button" onClick={this.handleIncrement}>+ 1</button>    
          <button className="button" onClick={this.handleDecrement}>- 1</button>  
      </div>
    );
  }
}

export default Counter;
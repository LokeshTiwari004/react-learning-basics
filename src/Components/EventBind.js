import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }
  
  // clickHandler() {
  //   this.setState({
  //     msg: "GoodBye!"
  //   })
  //   console.log(this);
  // }
  
  clickHandler = () => {
    this.setState({
      msg: "GoodBye!"
    })
    console.log(this)
  }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click me</button> */}
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default EventBind;

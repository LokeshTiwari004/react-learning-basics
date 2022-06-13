import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler() {
    console.log("Clicked the button");
    // console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent clickHandler = {this.eventHandler}/>
      </div>
    );
  }
}

export default ParentComponent;

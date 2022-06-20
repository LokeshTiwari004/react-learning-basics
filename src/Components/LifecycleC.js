import React, { Component } from "react";
import LifecycleD from "./LifecycleD";

class LifecycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "lokesh",
    };
  }

  refresh = () => {
    this.setState({name: "medha"});
  };

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleC getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleC shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("LifecycleC getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("LifecycleC componentDidUpdate");
  }

  render() {
    console.log("LifecycleC render");
    return (
      <div>
        <button onClick={this.refresh}>Refresh</button>
        <LifecycleD />
      </div>
    );
  }
}

export default LifecycleC;

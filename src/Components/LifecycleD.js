import React, { Component } from "react";

class LifecycleD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "rust",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleD getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleD shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("LifecycleD getSnapshotBeforeUpdate");
    return 1;
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("LifecycleD componentDidUpdate");
  }

  render() {
    console.log("LifecycleD render");
    return <div>LifecycleD</div>;
  }
}

export default LifecycleD;

import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("Component did mount");
  }

  //the following are being deprecated, must use UNSAFE_ flag in front of these in the future

  componentWillMount() {
    console.log("component will mount");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUpdate() {
    console.log("Component will update");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("Component will receive props");
  }

  //replaces the componentWillReceiveProps
  //   static getDerivedStateFromProps(nextProps, nextState) {
  //     return null;
  //   }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;

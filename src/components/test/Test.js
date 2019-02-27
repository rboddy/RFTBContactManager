import React, { Component } from "react";

class Test extends Component {
  state = {
    title: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title
        })
      );
  }

  //the following are being deprecated, must use UNSAFE_ flag in front of these in the future

  //   componentWillMount() {
  //     console.log("component will mount");
  //   }

  //   componentDidUpdate() {
  //     console.log("Component did update");
  //   }

  //   componentWillUpdate() {
  //     console.log("Component will update");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("Component will receive props");
  //   }

  //replaces the componentWillReceiveProps
  //   static getDerivedStateFromProps(nextProps, nextState) {
  //     return null;
  //   }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Test;

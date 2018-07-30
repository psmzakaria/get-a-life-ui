import React, { Component } from "react";
import { API_URL } from "./utils/configVar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  async componentDidMount() {
    const response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json();

      this.setState({
        message: data.message
      });
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.message}</p>
      </div>
    );
  }
}
//to be removed
export default App;

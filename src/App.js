import React, { Component } from "react";
import { API_URL } from "./utils/configVar";
import UserSignup from "./components/UserSignup";
import "./App.css";
import CreateEvent from "../src/components/CreateEvent"

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
        <CreateEvent />
        <div className="App-intro">{this.state.message}</div>
        <UserSignup/>
      </div>
    );
  }
}


export default App;

import React, { Component } from "react";
import { API_URL } from "./utils/configVar";
import "./App.css";
import Dashboard from "../src/components/Dashboard";
import Home from "../src/components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/:username/events" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;

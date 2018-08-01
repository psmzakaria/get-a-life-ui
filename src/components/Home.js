import React, { Component } from "react";
import { Grid, Responsive } from "semantic-ui-react";
import Logo from "./Logo";
import SigningForm from "./SigningForm";
import { API_URL } from "../utils/configVar";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "Signup",
      email: "",
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="container">
        <Responsive as={Grid} minWidth={768}>
          <Grid.Column width={8}>
            <Logo />
          </Grid.Column>
          <Grid.Column width={8}>
            <SigningForm
              loadComponent={this.loadComponent}
              handleOnChange={this.handleOnChange}
              handleSignInSubmit={this.handleSignInSubmit}
              handleSignUpSubmit={this.handleSignUpSubmit}
              state={this.state}
            />
          </Grid.Column>
        </Responsive>
        <Responsive as={Grid} {...Responsive.onlyMobile}>
          <Grid.Row>
            <Grid.Column>
              <Logo />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <SigningForm
                loadComponent={this.loadComponent}
                handleOnChange={this.handleOnChange}
                handleSignInSubmit={this.handleSignInSubmit}
                handleSignUpSubmit={this.handleSignUpSubmit}
                state={this.state}
              />
            </Grid.Column>
          </Grid.Row>
        </Responsive>
      </div>
    );
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSignInSubmit = event => {
    event.preventDefault();

    fetch(`${API_URL}/users/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });
  };

  handleSignUpSubmit = event => {
    event.preventDefault();

    fetch(`${API_URL}/users/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
    });
  };

  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };
}

export default Home;

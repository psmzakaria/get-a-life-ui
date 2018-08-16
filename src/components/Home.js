import React, { Component } from "react";
import { Grid, Responsive } from "semantic-ui-react";
import SideInfo from "./SideInfo";
import CredentialsForm from "./CredentialsForm";
import { API_URL } from "../utils/configVar";
import Logo from "./Logo";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "Sign Up",
      signUpError: {
        hidden: true,
        header: "",
        content: ""
      },
      signInError: {
        hidden: true,
        header: "",
        content: ""
      },
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="homeBgImage">
        
        <div className="logoPadding">
          <Logo />
        </div>
        <div className="container">
          <Responsive as={Grid} minWidth={768}>
            <Grid.Column width={8}>
              <SideInfo />
            </Grid.Column>
            <Grid.Column className="" width={8}>
              <CredentialsForm
                loadComponent={this.loadComponent}
                handleOnChange={this.handleOnChange}
                handleOnSubmit={this.handleOnSubmit}
                state={this.state}
              />
            </Grid.Column>
          </Responsive>
          <Responsive as={Grid} {...Responsive.onlyMobile}>
            <Grid.Row>
              <Grid.Column>
                <SideInfo />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <CredentialsForm
                  loadComponent={this.loadComponent}
                  handleOnChange={this.handleOnChange}
                  handleOnSubmit={this.handleOnSubmit}
                  state={this.state}
                />
              </Grid.Column>
            </Grid.Row>
          </Responsive>
        </div>
      </div>
    );
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    const response = await fetch(`${API_URL}/account/${event.target.id}`, {
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

    const data = await response.json();

    if (response.ok) {
      this.props.history.push({
        pathname: `${this.state.username}/events`
      });
    } else {
      if (this.state.componentToDisplay === "Sign Up") {
        this.setState({
          signUpError: {
            hidden: false,
            header: "Error",
            content: data
          }
        });
      } else {
        this.setState({
          signInError: {
            hidden: false,
            header: "Error",
            content: data.message
          }
        });
      }
    }
  };

  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };
}

export default Home;

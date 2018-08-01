import React, { Component } from "react";
import { Grid, Responsive } from "semantic-ui-react";
import UserSignup from "./UserSignup";
import UserSignin from "./UserSignin";
import Logo from "./Logo";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "Signup"
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
            {this.state.componentToDisplay === "Signup" && (
              <UserSignup loadComponent={this.loadComponent} />
            )}
            {this.state.componentToDisplay === "Signin" && (
              <UserSignin loadComponent={this.loadComponent} />
            )}
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
              <UserSignup />
            </Grid.Column>
          </Grid.Row>
        </Responsive>
      </div>
    );
  }
  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };
}

export default Home;

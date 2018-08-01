import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import UserSignup from "./UserSignup";
import UserSignin from "./UserSignin";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "Signup"
    };
  }
  render() {
    return (
      <div class="container">
        <Grid>
          <Grid.Column width={8}>
            <h1>logo container</h1>
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.componentToDisplay === "Signup" && (
              <UserSignup loadComponent={this.loadComponent} />
            )}
            {this.state.componentToDisplay === "Signin" && (
              <UserSignin loadComponent={this.loadComponent} />
            )}
          </Grid.Column>
        </Grid>
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

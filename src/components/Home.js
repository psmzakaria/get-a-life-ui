import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import UserSignup from "./UserSignup";

class Home extends Component {
  render() {
    return (
      <div class="container">
        <Grid>
          <Grid.Column width={8}>
            <h1>logo container</h1>
          </Grid.Column>
          <Grid.Column width={8}>
            <UserSignup />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;

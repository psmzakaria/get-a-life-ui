import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EOrganiser from "./EOrganiser";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid columns={2} divided>
          <Grid.Column width={4} color="violet">
            <p>username</p>
          </Grid.Column>
          <Grid.Column width={9}>
            <EOrganiser />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;

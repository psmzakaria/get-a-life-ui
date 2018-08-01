import React, { Component } from "react";
import { Grid, Icon } from "semantic-ui-react";
import EOrganiser from "./EOrganiser";

const mockUserData = {
  username: "user1"
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      username: mockUserData.username
    };
  }
  render() {
    return (
      <div>
        <Grid columns={2} divided>
          <Grid.Column textAlign="center" width={4} color="violet" >
              <h2>Profile</h2>
              <Icon size="huge" inverted color="teal" circular name="user" />
              <h3>
                <br />
                {this.state.username}
              </h3>
          </Grid.Column>
          <Grid.Column textAlign="center" width={9}>
            <EOrganiser />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;

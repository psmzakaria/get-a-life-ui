import React, { Component } from "react";
import { API_URL } from "../utils/configVar";
import { Grid, Icon, Responsive } from "semantic-ui-react";
import EOrganiser from "./EOrganiser";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hostedEvents: []
    };
  }

  getUserData = async () => {
    const username = this.props.location.pathname.split("/")[1];
    const response = await fetch(`${API_URL}/users/${username}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      const userData = await response.json();
      this.setState({
        username: userData.username,
        hostedEvents: userData.hostedEvents
      });
    }
  };

  componentDidMount = () => {
    this.getUserData();
  };

  render() {
    console.log(this.state.username);
    return (
      <div>
        <Responsive as={Grid} minWidth={768}>
          <Grid.Column textAlign="center" width={4} color="violet">
            <div className="profile-container">
              <h2>Profile</h2>

              <Icon size="huge" inverted color="teal" circular name="user" />
              <h3 id="username-display">{this.state.username}</h3>
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <EOrganiser hostedEvents={this.state.hostedEvents} />
          </Grid.Column>
        </Responsive>
        <Responsive as={Grid} {...Responsive.onlyMobile}>
          <Grid.Row color="violet">
            <div className="profile-container">
              <h2>Profile</h2>

              <Icon size="huge" inverted color="teal" circular name="user" />
              <h3 id="username-display">{this.state.username}</h3>
            </div>
          </Grid.Row>
          <Grid.Row>
            <EOrganiser hostedEvents={this.state.hostedEvents} />
          </Grid.Row>
        </Responsive>
      </div>
    );
  }
}

export default Home;

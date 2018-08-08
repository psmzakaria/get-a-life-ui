import React, { Component } from "react";
import { API_URL } from "../utils/configVar";
import { Grid, Icon } from "semantic-ui-react";
import EOrganiser from "./EOrganiser";
import CreateEvent from "./CreateEvent";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hostedEvents: [],
      invitedEvents: [],
      statuses: []
    };
  }

  componentDidMount = () => {
    this.getUserData();
  };

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
        hostedEvents: userData.hostedEvents,
        invitedEvents: userData.invitedEvents,
        statuses: userData.statuses
      });
    }
  };

  renderProfileDiv = () => {
    return (
      <div className="profile-container">
        <h2>Profile</h2>

        <Icon size="huge" inverted color="teal" circular name="user" />
        <h3 id="username-display">{this.state.username}</h3>
        <CreateEvent getUserData={this.getUserData} />
      </div>
    );
  };

  renderEOrganiseDiv = () => {
    return (
      <EOrganiser
        hostedEvents={this.state.hostedEvents}
        invitedEvents={this.state.invitedEvents}
        statuses={this.state.statuses}
      />
    );
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column textAlign="center" width={4} color="violet">
            {this.renderProfileDiv()}
          </Grid.Column>
          <Grid.Column width={12}>{this.renderEOrganiseDiv()}</Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

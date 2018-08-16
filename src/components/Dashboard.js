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
      hostedStatuses: [],
      invitedEvents: [],
      invitedStatuses: [],
      acceptedEvents: [],
      acceptedStatuses: []
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
        hostedStatuses: userData.hostedStatuses,
        invitedEvents: userData.invitedEvents,
        invitedStatuses: userData.invitedStatuses,
        acceptedEvents: userData.acceptedEvents,
        acceptedStatuses: userData.acceptedStatuses
      });
    }
  };

  renderProfileDiv = () => {
    return (
      <div className="profile-container">
        <h2>Profile</h2>

        <Icon size="huge" inverted color="teal" circular name="smile" />
        <h3 id="username-display">{this.state.username}</h3>
        <CreateEvent getUserData={this.getUserData} />
      </div>
    );
  };

  renderEOrganiseDiv = () => {
    return (
      <EOrganiser
        hostedEvents={this.state.hostedEvents}
        hostedStatuses={this.state.hostedStatuses}
        invitedEvents={this.state.invitedEvents}
        invitedStatuses={this.state.invitedStatuses}
        acceptedEvents={this.state.acceptedEvents}
        acceptedStatuses={this.state.acceptedStatuses}
        getUserData={this.getUserData}
        username={this.state.username}
      />
    );
  };

  render() {
    return (
      <div className="dashContainer">
        <Grid padded>
          <Grid.Column className="sidebar" textAlign="center" width={4}>
            {this.renderProfileDiv()}
          </Grid.Column>
          <Grid.Column cl width={12}>
            {this.renderEOrganiseDiv()}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import { API_URL } from "../utils/configVar";
import { Grid, Icon, Responsive } from "semantic-ui-react";
import EOrganiser from "./EOrganiser";
import CreateEvent from "./CreateEvent";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hostedEvents: [],
      invitedEvents: [],
      statuses: [],
      formFields: {
        title: "",
        startDate: "",
        endDate: ""
      },
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });
  handleChange = (event, propertyName) => {
    const formFields = this.state.formFields;
    formFields[propertyName] = event.target.value;
    this.setState({
      formFields: formFields
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      modalOpen: false
    });

    const response = await fetch(`${API_URL}/events/create`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.formFields.title,
        startDate: this.state.formFields.startDate,
        endDate: this.state.formFields.endDate
      })
    });

    const data = await response.json();

    this.setState({
      hostedEvents: [...this.state.hostedEvents, data]
    });
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

  componentDidMount = () => {
    this.getUserData();
  };

  render() {
    return (
      <div>
        <Responsive as={Grid} minWidth={768}>
          <Grid.Column textAlign="center" width={4} color="violet">
            <div className="profile-container">
              <h2>Profile</h2>

              <Icon size="huge" inverted color="teal" circular name="user" />
              <h3 id="username-display">{this.state.username}</h3>
              <CreateEvent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                formFields={this.state.formFields}
                modalOpen={this.state.modalOpen}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <EOrganiser
              hostedEvents={this.state.hostedEvents}
              invitedEvents={this.state.invitedEvents}
              statuses={this.state.statuses}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              formFields={this.state.formFields}
              modalOpen={this.state.modalOpen}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
            />
          </Grid.Column>
        </Responsive>
        <Responsive as={Grid} {...Responsive.onlyMobile}>
          <Grid.Row color="violet">
            <div className="profile-container">
              <h2>Profile</h2>

              <Icon size="huge" inverted color="teal" circular name="user" />
              <h3 id="username-display">{this.state.username}</h3>
              <CreateEvent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                formFields={this.state.formFields}
                modalOpen={this.state.modalOpen}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
              />
            </div>
          </Grid.Row>
          <Grid.Row>
            <EOrganiser
              hostedEvents={this.state.hostedEvents}
              invitedEvents={this.state.invitedEvents}
              statuses={this.state.statuses}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              formFields={this.state.formFields}
              modalOpen={this.state.modalOpen}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
            />
          </Grid.Row>
        </Responsive>
      </div>
    );
  }
}

export default Home;

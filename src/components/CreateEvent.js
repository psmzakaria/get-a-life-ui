import React, { Component } from "react";
import { Form, Modal, Button, Icon } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";
import CreateInvitationModal from "./CreateInvitationModal";
import CreateEventCalender from "./CreateEventCalender";
import format from "date-fns/format";

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      title: "",

      startDate: "",
      endDate: "",

      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleCalendarDates = (startDate, endDate) => {
    this.setState({
      endDate: format(endDate, "DD/MM/YYYY"),
      startDate: format(startDate, "DD/MM/YYYY")
    });
  };

  handleSubmit = async (event, invitees) => {
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
        title: this.state.title,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        attendees: invitees
      })
    });

    if (response.ok) {
      this.props.getUserData();
    }
  };

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button animated="vertical" color="olive" onClick={this.handleOpen}>
              <Button.Content hidden>Host Your Event</Button.Content>
              <Button.Content visible>
                <Icon.Group onClick={this.handleOpen} size="large">
                  <Icon loading size="big" name="circle notch" />
                  <Icon name="calendar alternate" />
                </Icon.Group>
              </Button.Content>
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          closeIcon
        >
          <Modal.Header>Create Your Event</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <Form>
                <Form.Field>
                  <label>
                    <h2>Title</h2>
                  </label>
                  <input
                    id="title"
                    placeholder="Title of the event"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <CreateEventCalender
                  handleCalendarDates={this.handleCalendarDates}
                />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <CreateInvitationModal handleSubmit={this.handleSubmit} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default CreateEvent;

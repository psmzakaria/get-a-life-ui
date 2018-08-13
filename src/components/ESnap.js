import React, { Component } from "react";
import { Card, Modal, Button, Checkbox, Icon } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";

class ESnap extends Component {
  handleAcceptSubmit = async event => {
    event.preventDefault();
    const eventId = this.props.event._id;
    const response = await fetch(`${API_URL}/events/${eventId}/rsvp`, {
      method: "PUT",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: "accepted",
        availableDates: "XXXXXX"
      })
    });
    if (response.ok) {
      console.log("updated successfully");
    }
  };

  render() {
    const { title, hostId, proposedDates, description } = this.props.event;
    const { username: hostName } = hostId;
    const { status } = this.props;
    return (
      <div className="esnap-container-size">
        <Modal
          trigger={
            <Card color="red">
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                  <span>Host: {hostName}</span>
                </Card.Meta>
                <Card.Description>
                  {" "}
                  <Icon name="list" size="small" /> KIV - {description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>{status}</Card.Content>
            </Card>
          }
          open={this.props.modalOpen}
          onClose={this.props.handleClose}
          closeIcon
        >
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {hostName}
              <br />
              <strong> Description:</strong> {description}
              <br />
              {proposedDates.map((date, i) => {
                return (
                  <div key={i}>
                    <Checkbox label={date} />
                  </div>
                );
              })}
              <br />
              <Button
                floated="right"
                type="submit"
                onClick={event => this.handleAcceptSubmit(event)}
              >
                Accept
              </Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default ESnap;

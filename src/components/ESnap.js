import React, { Component } from "react";
import { Card, Modal, Button, Icon } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import format from "date-fns/format";

class ESnap extends Component {
  constructor() {
    super();
    this.state = {
      dates: [],
      dummy: []
    };
  }

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
        availableDates: this.state.dates
      })
    });
    if (response.ok) {
      console.log("updated successfully");
    }
  };

  handleCalendarSelect = date => {
    const formattedDate = format(date, "YYYYMMDD");
    const updatedDates = defaultMultipleDateInterpolation(
      formattedDate,
      this.state.dates
    );
    this.setState({
      dates: updatedDates
    });
  };

  render() {
    const { title, hostId, proposedDates, description } = this.props.event;
    const { username: hostName } = hostId;
    const { status } = this.props;
    const firstDate = proposedDates[0];
    const lastDate = proposedDates[proposedDates.length - 1];
    const minDate = new Date(
      `${firstDate.substr(0, 4)}-
      ${firstDate.substr(4, 2)}-
      ${firstDate.substr(6, 2)}`
    );
    const maxDate = new Date(
      `${lastDate.substr(0, 4)}-
      ${lastDate.substr(4, 2)}-
      ${lastDate.substr(6, 2)}`
    );
    
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
              <div>
                <InfiniteCalendar
                  autoFocus={false}
                  width={
                    window.innerWidth <= 650
                      ? window.innerWidth * 0.85
                      : window.innerWidth * 0.6
                  }
                  height={window.innerHeight - 450}
                  displayOptions={{
                    showHeader: false
                  }}
                  min={minDate}
                  minDate={minDate}
                  max={maxDate}
                  maxDate={maxDate}
                  Component={withMultipleDates(Calendar)}
                  selected={this.state.dummy}
                  interpolateSelection={defaultMultipleDateInterpolation}
                  onSelect={this.handleCalendarSelect}
                  theme={{
                    selectionColor: "rgb(146, 118, 255)",
                    textColor: {
                      default: "#333",
                      active: "#FFF"
                    },
                    weekdayColor: "rgb(146, 118, 255)",
                    headerColor: "rgb(127, 95, 251)",
                    floatingNav: {
                      background: "rgba(81, 67, 138, 0.96)",
                      color: "#FFF",
                      chevron: "#FFA726"
                    }
                  }}
                />
              </div>
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

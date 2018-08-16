import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import format from "date-fns/format";
import EventCard from "./EventCard";

class GuestModal extends Component {
  constructor() {
    super();
    this.state = {
      dates: [],
      dummy: [],
      modalOpen: false
    };
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      modalOpen: false
    });
  };

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
      this.handleClose();
      this.props.getUserData();
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
    const firstDate = proposedDates[0];
    const lastDate = proposedDates[proposedDates.length - 1];
    const minDate = new Date(
      Date.UTC(
        firstDate.substr(0, 4),
        firstDate.substr(4, 2) - 1,
        firstDate.substr(6, 2)
      )
    );
    const maxDate = new Date(
      Date.UTC(
        lastDate.substr(0, 4),
        lastDate.substr(4, 2) - 1,
        lastDate.substr(6, 2)
      )
    );

    return (
      <div className="esnap-container-size">
        <Modal
          trigger={
            <EventCard
              handleOpen={this.handleOpen}
              event={this.props.event}
              status={this.props.status}
            />
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
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
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              type="submit"
              content="Accept"
              onClick={event => this.handleAcceptSubmit(event)}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default GuestModal;

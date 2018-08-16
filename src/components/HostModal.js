import React, { Component } from "react";
import {
  Modal,
  Button,
  Icon,
  Label,
  Segment,
  Form,
  Radio
} from "semantic-ui-react";
import { API_URL } from "../utils/configVar";
import EventCard from "./EventCard";
import { descSortObjPropLen } from "../utils/sortUtils";

class HostModal extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      attending: [],
      pending: [],
      selectedDate: "",
      seeMore: false
    };
  }

  getEventData = async () => {
    const response = await fetch(
      `${API_URL}/events/${this.props.event._id}/dates`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );

    if (response.ok) {
      const eventData = await response.json();

      const sortedAttendance = descSortObjPropLen(
        eventData.attending,
        "attendees"
      );

      this.setState({
        pending: eventData.pending,
        attending: sortedAttendance
      });
    }
  };

  handleChange = (e, { value }) => {
    this.setState({ selectedDate: value });
  };

  handleOpen = () => {
    this.getEventData();

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
    const response = await fetch(`${API_URL}/events/${eventId}/update`, {
      method: "PUT",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        selectedDate: this.state.selectedDate
      })
    });
    if (response.ok) {
      this.handleClose();
      console.log("updated successfully");
    }
  };
  render() {
    const { title } = this.props.event;
    const listOfDates = this.state.seeMore
      ? this.state.attending
      : this.state.attending.slice(0, 5);

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
          <Modal.Header>
            <h2>{title}</h2>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <h3> Pending Reply:</h3>
              <div>
                {this.state.pending.length === 0 ? (
                  <p>No pending replies</p>
                ) : (
                  this.state.pending.map((user, index) => {
                    return (
                      <Label key={index}>
                        <Icon name="user" /> {user}
                      </Label>
                    );
                  })
                )}
              </div>
              <br />
              <h3> Pick a date:</h3>
              <Segment>
                <Form>
                  <Form.Field>
                    Selected date: <b>{this.state.selectedDate}</b>
                  </Form.Field>
                  {listOfDates.map((attendance, index) => {
                    return (
                      <Form.Field key={index}>
                        <Radio
                          label={attendance.date}
                          name="radioGroup"
                          value={attendance.date}
                          checked={this.state.selectedDate === attendance.date}
                          onChange={this.handleChange}
                        />
                        {attendance.attendees.map((attendee, index) => {
                          return (
                            <Label key={index}>
                              <Icon name="user" />
                              {attendee}
                            </Label>
                          );
                        })}
                      </Form.Field>
                    );
                  })}
                  {this.state.attending.length > 5 &&
                    (this.state.seeMore ? (
                      this.state.seeMore && (
                        <a
                          className="cursor-pointer"
                          onClick={() => this.setState({ seeMore: false })}
                        >
                          {` `} See Less
                        </a>
                      )
                    ) : (
                      <a
                        className="cursor-pointer"
                        onClick={() => this.setState({ seeMore: true })}
                      >
                        {` `} See More
                      </a>
                    ))}
                </Form>
              </Segment>
              <br />
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

export default HostModal;

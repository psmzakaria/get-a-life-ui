import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import EventCard from "./EventCard";

const getCookie = cname => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

class GuestAcceptedModal extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    const { title, hostId } = this.props.event;
    const { username: hostName } = hostId;
    const userId = getCookie("userId");
    const userEventDetails = this.props.event.attendees.find(ele => {
      return ele.userId === userId;
    });

    console.log(this.props.event);

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
              <strong>Host: </strong>
              {hostName}
              <br />
              <strong> Accepted dates:</strong>
              <br />
              {userEventDetails.availableDates.map(ele => {
                return <li>{ele}</li>;
              })}
              <br />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default GuestAcceptedModal;
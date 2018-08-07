import React, { Component } from "react";
import { Card, Divider } from "semantic-ui-react";
import ESnap from "./ESnap";

class EOrganiser extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="eorganiser-container">
        <h2> Your Hosted Events</h2>
        <Card.Group centered>
          {this.props.hostedEvents.map((event, index) => {
            return (
              <ESnap
                key={event._id}
                title={event.title}
                host={event.hostId.username}
                status={this.props.statuses[index]}
              />
            );
          })}
        </Card.Group>
        <Divider />
        <h2> Your Invited Events</h2>
        <Card.Group centered>
          {this.props.invitedEvents.map((event, index) => {
            return (
              <ESnap
                key={event._id}
                title={event.title}
                host={event.hostId.username}
                status={this.props.statuses[index]}
              />
            );
          })}
        </Card.Group>
        <Divider />
        <h2> You have a life</h2>
      </div>
    );
  }
}

export default EOrganiser;

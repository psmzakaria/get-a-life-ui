import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import ESnap from "./ESnap";

class EOrganiser extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="eorganiser-container">
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
      </div>
    );
  }
}

export default EOrganiser;

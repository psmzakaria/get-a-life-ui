import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import ESnap from "./ESnap";
import CreateEvent from "./CreateEvent";

class EOrganiser extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="eorganiser-container">
        <Card.Group centered>
          <CreateEvent />
          {console.log("in Organiser", this.props.hostedEvents[0])}
          {this.props.hostedEvents.map((event,index) => {
            return <ESnap title={event.title} host={event.hostId.username} status={this.props.statuses[index]}/>
          })}
        </Card.Group>
      </div>
    );
  }
}

export default EOrganiser;

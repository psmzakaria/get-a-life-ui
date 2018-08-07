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
          <CreateEvent
            handleSubmit={this.props.handleSubmit}
            handleChange={this.props.handleChange}
            formFields={this.props.formFields}
            modalOpen={this.props.modalOpen}
            handleOpen={this.props.handleOpen}
            handleClose={this.props.handleClose}
          />
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

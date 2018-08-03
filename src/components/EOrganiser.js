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
          <ESnap />
          <ESnap />
          <ESnap />
        </Card.Group>
      </div>
    );
  }
}

export default EOrganiser;

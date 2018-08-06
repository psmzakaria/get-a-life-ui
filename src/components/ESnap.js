import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class ESnap extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="esnap-container-size">
        <Card color="red">
          {/* <div className="esnap-icon">
            <Icon name="calendar alternate outline" size="massive" />
          </div> */}
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>
              <span>Host: {this.props.host}</span>
            </Card.Meta>
            <Card.Description>KIV - information/details</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              {this.props.status}
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ESnap;

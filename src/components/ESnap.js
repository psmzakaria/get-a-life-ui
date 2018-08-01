import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";

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
            <Card.Header>title</Card.Header>
            <Card.Meta>
              <span>Host: ___</span>
            </Card.Meta>
            <Card.Description>Event dates</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              guest invited
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ESnap;

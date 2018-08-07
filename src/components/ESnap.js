import React from "react";
import { Card } from "semantic-ui-react";

const ESnap = props => {
  return (
    <div className="esnap-container-size">
      <Card color="red">
        {/* <div className="esnap-icon">
            <Icon name="calendar alternate outline" size="massive" />
          </div> */}
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <span>Host: {props.host}</span>
          </Card.Meta>
          <Card.Description>KIV - information/details</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>{props.status}</a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ESnap;

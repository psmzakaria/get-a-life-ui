import React from "react";
import { Card, Icon } from "semantic-ui-react";

const EventCard = props => {
  const { title, hostId, description } = props.event;
  const { username: hostName } = hostId;
  return (
    <Card onClick={props.handleOpen} color="violet">
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>Host: {hostName}</span>
        </Card.Meta>
        <Card.Description>
          {" "}
          <Icon name="list" size="small" /> KIV - {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>{props.status}</Card.Content>
    </Card>
  );
};

export default EventCard;

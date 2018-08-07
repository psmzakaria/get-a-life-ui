import React from "react";
import { Card, Divider } from "semantic-ui-react";
import ESnap from "./ESnap";

const getESnap = (event, status) => {
  return (
    <ESnap
      key={event._id}
      title={event.title}
      host={event.hostId.username}
      status={status}
    />
  );
};

const EOrganiser = props => {
  return (
    <div className="eorganiser-container">
      <h2> Your Hosted Events</h2>
      <Card.Group centered>
        {props.hostedEvents.map((event, index) => {
          return getESnap(event, props.statuses[index]);
        })}
      </Card.Group>
      <Divider />
      <h2> Your Invited Events</h2>
      <Card.Group centered>
        {props.invitedEvents.map((event, index) => {
          return getESnap(event, props.statuses[index]);
        })}
      </Card.Group>
      <Divider />
      <h2> You have a life</h2>
    </div>
  );
};

export default EOrganiser;

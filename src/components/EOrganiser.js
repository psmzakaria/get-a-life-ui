import React from "react";
import { Card, Divider, Header } from "semantic-ui-react";
import ESnap from "./ESnap";

const getESnap = (event, status) => {
  return <ESnap key={event._id} event={event} status={status} />;
};

const EOrganiser = props => {
  return (
    <div className="eorganiser-container">
      <h2> Your Hosted Events</h2>
      {props.hostedEvents.length > 0 && (
        <Card.Group>
          {props.hostedEvents.map((event, index) => {
            return getESnap(event, props.statuses[index]);
          })}
        </Card.Group>
      )}
      {props.hostedEvents.length === 0 && (
        <Header as="h2" textAlign="center" disabled>
          You have no hosted events
        </Header>
      )}
      <Divider />
      <h2> Your Invited Events</h2>
      {props.invitedEvents.length > 0 && (
        <Card.Group>
          {props.invitedEvents.map((event, index) => {
            return getESnap(event, props.statuses[index]);
          })}
        </Card.Group>
      )}
      {props.invitedEvents.length === 0 && (
        <Header as="h2" textAlign="center" disabled>
          You have not been invited
        </Header>
      )}
      <Divider />
      <h2> You have a life</h2>
      <Header as="h2" textAlign="center" disabled>
        Soon...
      </Header>
    </div>
  );
};

export default EOrganiser;

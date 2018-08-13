import React from "react";
import { Button, List, Segment } from "semantic-ui-react";

const InvitationList = props => {
  return (
    <div>
      <h2>Invitation List</h2>
      <Segment padded="very">
        <List divided verticalAlign="middle">
          {props.invitees.map((invitee, index) => (
            <List.Item key={index}>
              <List.Content floated="right">
                <Button
                  color="red"
                  size="tiny"
                  onClick={event => props.handleDeleteFromList(event, invitee)}
                >
                  -
                </Button>
              </List.Content>
              <List.Content>{invitee.username}</List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    </div>
  );
};

export default InvitationList;

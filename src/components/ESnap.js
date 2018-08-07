import React, { Component } from "react";
import { Card, Modal, Button, Checkbox } from "semantic-ui-react";

class ESnap extends Component {
  render() {
    const { title, hostId, proposedDates } = this.props.event;
    const { username: hostName } = hostId;
    const { status } = this.props;

    return (
      <div className="esnap-container-size">
        <Modal
          trigger={
            <Card color="red">
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                  <span>Host: {hostName}</span>
                </Card.Meta>
                <Card.Description>KIV - information/details</Card.Description>
              </Card.Content>
              <Card.Content extra>{status}</Card.Content>
            </Card>
          }
          open={this.props.modalOpen}
          onClose={this.props.handleClose}
          closeIcon
        >
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {hostName}

              {proposedDates.map((date, i) => {
                return (
                  <div key={i}>
                    <Checkbox label={date} />
                  </div>
                );
              })}
              <Button type="submit" onClick={this.handleSubmit}>
                Accept
              </Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default ESnap;

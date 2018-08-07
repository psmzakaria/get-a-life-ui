import React, { Component } from "react";
import { Button, Form, Modal, Card, Icon } from "semantic-ui-react";

class CreateEvent extends Component {
  render() {
    return (
      <div>
        <Modal
          trigger={
            <div className="esnap-container-size">
              <Card onClick={this.props.handleOpen}>
                <div className="esnap-icon">
                  <Icon name="add to calendar" size="huge" />
                </div>
                <Card.Content>
                  <Card.Header>Create New Event</Card.Header>
                </Card.Content>
              </Card>
            </div>
          }
          open={this.props.modalOpen}
          onClose={this.props.handleClose}
          closeIcon
        >
          <Modal.Header>Create Your Event</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <Form>
                <Form.Field>
                  <label>Title</label>
                  <input
                    id="title"
                    placeholder="Title of the event"
                    value={this.props.formFields.title}
                    onChange={event => this.props.handleChange(event, "title")}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Start Date</label>
                  <input
                    id="start"
                    placeholder="DD/MM/YYYY"
                    value={this.props.formFields.startDate}
                    onChange={event =>
                      this.props.handleChange(event, "startDate")
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>End Date</label>
                  <input
                    id="end"
                    placeholder="DD/MM/YYYY"
                    value={this.props.formFields.endDate}
                    onChange={event =>
                      this.props.handleChange(event, "endDate")
                    }
                  />
                </Form.Field>
                <Button type="submit" onClick={this.props.handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default CreateEvent;

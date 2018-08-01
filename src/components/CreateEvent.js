import React, { Component } from "react";
import { Button, Form, Modal, Card, Icon } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      formFields: {
        title: "",
        startDate: "",
        endDate: ""
      }
    };
  }
  render() {
    return (
      <div>
        <Modal
          trigger={
            <Card>
              <Icon name="add to calendar" size="massive" />
              <Card.Content>
                <Card.Header>Create New Event</Card.Header>
              </Card.Content>
            </Card>
          }
          closeIcon
        >
          <Modal.Header>Employer Login</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <Form>
                <Form.Field>
                  <label>Title</label>
                  <input
                    placeholder="Title of the event"
                    value={this.state.formFields.title}
                    onChange={event => this.handleChange(event, "title")}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Start Date</label>
                  <input
                    placeholder="DD/MM/YYYY"
                    value={this.state.formFields.startDate}
                    onChange={event => this.handleChange(event, "startDate")}
                  />
                </Form.Field>
                <Form.Field>
                  <label>End Date</label>
                  <input
                    placeholder="DD/MM/YYYY"
                    value={this.state.formFields.endDate}
                    onChange={event => this.handleChange(event, "endDate")}
                  />
                </Form.Field>
                <Button type="submit" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
  handleChange = (event, propertyName) => {
    const formFields = this.state.formFields;
    formFields[propertyName] = event.target.value;
    this.setState({
      formFields: formFields
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    fetch(`${API_URL}/events/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.formFields.title,
        startDate: this.state.formFields.startDate,
        endDate: this.state.formFields.endDate
      })
    });
  };
}

export default CreateEvent;

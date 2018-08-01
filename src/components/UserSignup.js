import React, { Component } from "react";
import { Button, Checkbox, Form, Divider } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";

class UserSignup extends Component {
  constructor() {
    super();
    this.state = {
      formFields: {
        email: "",
        username: "",
        password: ""
      }
    };
  }
  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted form">
          <Form>
            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Email"
                value={this.state.formFields.email}
                onChange={event => this.handleChange(event, "email")}
              />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input
                placeholder="Username"
                value={this.state.formFields.username}
                onChange={event => this.handleChange(event, "username")}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                value={this.state.formFields.password}
                onChange={event => this.handleChange(event, "password")}
                type="password"
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button
              fluid
              color="blue"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form>
          <Divider />
          <div>
            <p className="text-align-center">
              Have an account?
              <a
                className="cursor-pointer"
                onClick={() => this.props.loadComponent("Signin")}
              >
                {` `} Sign In Here
              </a>
            </p>
          </div>
        </div>
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

    fetch(`${API_URL}/users/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // email: this.state.formFields.email,
        username: this.state.formFields.username,
        password: this.state.formFields.password
      })
    });
  };
}

export default UserSignup;

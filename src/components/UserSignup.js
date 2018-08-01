import React from "react";
import { Button, Checkbox, Form, Divider } from "semantic-ui-react";

const UserSignup = props => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted form">
        <h1>Sign Up</h1>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input
              id="email"
              placeholder="Email"
              value={props.email}
              onChange={props.handleOnChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input
              id="username"
              placeholder="Username"
              value={props.username}
              onChange={props.handleOnChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              id="password"
              placeholder="Password"
              value={props.password}
              onChange={props.handleOnChange}
              type="password"
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button fluid color="blue" type="submit" onClick={props.handleSubmit}>
            Submit
          </Button>
        </Form>
        <Divider />
        <div>
          <p className="text-align-center">
            Have an account?
            <a
              className="cursor-pointer"
              onClick={() => props.loadComponent("Signin")}
            >
              {` `} Sign In Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;

import React from "react";
import { Button, Form, Divider } from "semantic-ui-react";

const UserSignin = props => (
  <div className="ui inverted segment">
    <div className="ui inverted form">
      <h1>Sign In Page</h1>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button fluid color='blue' type="submit">Sign In</Button>
      </Form>
      <Divider />
      <div>
        <p className="text-align-center">
          Don't have an account?
          <a className="cursor-pointer"
            onClick={() => props.loadComponent("Signup")}
          >
            {` `} Sign Up Here
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default UserSignin;

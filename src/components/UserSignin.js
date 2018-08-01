import React from "react";
import { Button, Form } from "semantic-ui-react";

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
        <Button type="submit">Sign In</Button>
      </Form>
      <div>
        <p>
          Don't have an account?
          <a
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

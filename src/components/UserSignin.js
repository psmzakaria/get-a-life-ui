import React from "react";
import { Button, Form, Divider } from "semantic-ui-react";

const UserSignin = props => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted form">
        <h1>Sign In</h1>
        <Form>
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
              type="password"
              value={props.password}
              onChange={props.handleOnChange}
            />
          </Form.Field>
          <Button fluid color="blue" type="submit" onClick={props.handleSubmit}>
            Sign In
          </Button>
        </Form>
        <Divider />
        <div>
          <p className="text-align-center">
            Don't have an account?
            <a
              className="cursor-pointer"
              onClick={() => props.loadComponent("Signup")}
            >
              {` `} Sign Up Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignin;

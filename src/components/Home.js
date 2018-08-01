import React, { Component } from "react";
import { Grid, Responsive } from "semantic-ui-react";
import Logo from "./Logo";
import SigningForm from "./SigningForm";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "Signup"
    };
  }
  render() {
    return (
      <div className="container">
        <Responsive as={Grid} minWidth={768}>
          <Grid.Column width={8}>
            <Logo />
          </Grid.Column>
          <Grid.Column width={8}>
            <SigningForm
              componentToDisplay={this.state.componentToDisplay}
              loadComponent={this.loadComponent}
            />
          </Grid.Column>
        </Responsive>
        <Responsive as={Grid} {...Responsive.onlyMobile}>
          <Grid.Row>
            <Grid.Column>
              <Logo />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <SigningForm
                componentToDisplay={this.state.componentToDisplay}
                loadComponent={this.loadComponent}
              />
            </Grid.Column>
          </Grid.Row>
        </Responsive>
      </div>
    );
  }
  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };
}

export default Home;

/// <reference types="Cypress" />
const { URL, userGuest, userHost } = require("../fixtures/testData");

const signupUser = username => {
  cy.visit(URL);
  cy.get("#username")
    .clear()
    .type(username);
  cy.get("#password").type("password01");
  cy.get("#signup").click();
};

const signinUser = username => {
  cy.visit(URL);
  cy.get("a")
    .contains("Sign In Here")
    .click();
  cy.get("#username")
    .clear()
    .type(username);
  cy.get("#password").type("password01");
  cy.get("#signin").click();
};

const createEvent = () => {
  cy.get(".calendar").click();
  cy.get("#title")
    .clear()
    .type("My New Event")
    .should("have.value", "My New Event");
  cy.get(".Cal__Day__today").click();
  cy.get(".Cal__Day__today + li").click();
  cy.get(".ui.button")
    .contains("Invite Friends!")
    .click();
};

const inviteUser = username => {
  cy.get(".prompt").type(username);
  cy.get(".content .title").click();
  cy.get(".actions")
    .find(".button")
    .contains("All Done")
    .click();
};

const removeUser = () => {
  cy.get(".item")
    .find(".button")
    .contains("-")
    .click();
};

context("Eventpage test", () => {
  beforeEach(() => {
    signupUser(userGuest);
    signupUser(userHost);
  });

  it.only("create an event then add friends", () => {
    createEvent();
    inviteUser(userGuest);

    cy.get(".esnap-container-size");
  });

  it("as a guest, i should see the event which i am invited to", () => {
    createEvent();
    inviteUser(userGuest);

    signinUser(userGuest);

    cy.get("h2")
      .contains("Your Invited Events")
      .next()
      .get(".esnap-container-size")
      .should("have.length", 1);
  });

  it("create an event, add friend then remove", () => {
    createEvent();
    inviteUser(userGuest);

    removeUser();
    cy.get(".list").should("be.empty");
  });
});

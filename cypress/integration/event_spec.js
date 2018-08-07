/// <reference types="Cypress" />
const URL = "http://localhost:3001/";

context("Eventpage test", () => {
  before(() => {
    cy.exec("npm run db:reset");
  });
  beforeEach(() => {
    cy.visit(URL);
  });

  it("simulate signup and then proceed to create an event", () => {
    cy.get("#username")
      .clear()
      .type("user01");
    cy.get("#password").type("password01");
    cy.get("#signup").click();
    cy.url().should("eq", URL + "user01/events");
    cy.get(".add.to.calendar.huge.icon").click();
    cy.get("#title")
      .clear()
      .type("My New Event")
      .should("have.value", "My New Event");
    cy.get("#start")
      .clear()
      .type("10/08/2018")
      .should("have.value", "10/08/2018");
    cy.get("#end")
      .clear()
      .type("25/08/2018")
      .should("have.value", "25/08/2018");
    cy.get(".ui.button").click();
    cy.get(".esnap-container-size");
    cy.get(".ui.centered.cards")
      .children()
      .should($div => {
        expect($div).to.have.length(1);
      });
  });
});

/// <reference types="Cypress" />
const URL = "http://localhost:3001/";

context("Homepage test", () => {
  before(() => {
    cy.exec("npm run db:reset");
  });
  beforeEach(() => {
    cy.visit(URL);
  });
});


it("type username/pw into username/pw input of signup", () => {
    cy.get(".ui-card")
      .clear()
      .type("My New Event")
      .should("have.value"  , "My New Event");
    cy.get("#")
      .type("30/08/2018")
      .should("have.value", "30/08/2018");
      cy.get("#")
      .type("15/09/2018")
      .should("have.value", "15/09/2018");

    cy.get("#signup").click();
    cy.url().should("eq", URL + "user01/events");
  });

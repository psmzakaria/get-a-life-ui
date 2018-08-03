/// <reference types="Cypress" />
const URL = "http://localhost:3001/";

context("Homepage test", () => {
  before(() => {
    cy.exec("npm run db:reset");
  });
  beforeEach(() => {
    cy.visit("http://localhost:3003");
  });

  beforeEach(() => {
    cy.visit(URL);
  });

  it("type username/pw into username/pw input of signup", () => {
    cy.get("#username")
      .clear()
      .type("user01")
      .should("have.value", "user01");
    cy.get("#password")
      .type("password01")
      .should("have.value", "password01");
    cy.get("#signup").click();
    cy.url().should("eq", URL + "user01/events");
  });

  it("should submit username and pw for signin and redirect", () => {
    cy.get(".cursor-pointer").click();
    cy.get("#username")
      .type("user01")
      .should("have.value", "user01");
    cy.get("#password")
      .type("password01")
      .should("have.value", "password01");
    cy.get("#signin").click();
    cy.url().should("eq", URL + "user01/events");
  });

  it("should remain in homepage for duplicate user sign up", () => {
    cy.get("#username")
      .clear()
      .type("user01");
    cy.get("#password").type("password01");
    cy.get("#signup").click();
    cy.url().should("eq", URL);
  });

  it("should remain in homepage for blank username sign up", () => {
    cy.get("#username")
      .clear()
      .type(" ");
    cy.get("#password").type("password01");
    cy.get("#signup").click();
    cy.url().should("eq", URL);
  });

  it("should submit username and pw for signup and redirect", () => {
    cy.get(".cursor-pointer").click();
    cy.get("#username")
      .type("user01")
      .should("have.value", "user01");
    cy.get("#password")
      .type("password01")
      .should("have.value", "password01");
    cy.get("#signin").click();
    cy.url().should("eq", "http://localhost:3003/events");
  });
});

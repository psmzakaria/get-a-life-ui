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

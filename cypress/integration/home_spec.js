/// <reference types="Cypress" />

context('Homepage test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001');
	});

	it('type username/pw into username/pw input', () => {
		cy.get('#username').type('user01').should('have.value', 'user01');
		cy.get('#password').type('password01').should('have.value', 'password01');
	});

	it('should submit username and pw for signup and redirect', () => {
		cy.get('.cursor-pointer').click();
		cy.get('#username').type('user01').should('have.value', 'user01');
		cy.get('#password').type('password01').should('have.value', 'password01');
		cy.get('#signin').click();
		cy.url().should('eq', 'http://localhost:3001/events');
	});
});

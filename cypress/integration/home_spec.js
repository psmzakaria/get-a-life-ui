/// <reference types="Cypress" />
const URL = 'http://localhost:3001/';

context('Homepage test', () => {
	before(() => {
		cy.exec('npm run db:reset');
	});
	beforeEach(() => {
		cy.visit(URL);
	});

	it('should return successful signup of user01', () => {
		cy.get('#username').clear().type('user01').should('have.value', 'user01');
		cy.get('#password').type('password01').should('have.value', 'password01');
		cy.get('#signup').click();
		cy.url().should('eq', URL + 'user01/events');
	});

	it('should return successful signin of user01 and redirect to /user01/events', () => {
		cy.get('.cursor-pointer').click();
		cy.get('#username').type('user01').should('have.value', 'user01');
		cy.get('#password').type('password01').should('have.value', 'password01');
		cy.get('#signin').click();
		cy.url().should('eq', URL + 'user01/events');
		cy.get('#username-display').contains('user01');
	});

	it.skip('should remain in homepage for duplicate user sign up w/ error message', () => {
		cy.get('#username').clear().type('user01');
		cy.get('#password').type('password01');
		cy.get('#signup').click();
		cy.get('.ui.negative.message').contains('User validation failed: username: Username already exists');
		cy.url().should('eq', URL);
	});

	it.skip('should remain in homepage for blank username sign up w/ error message', () => {
		cy.get('#username').clear().type(' ');
		cy.get('#password').type('password01');
		cy.get('#signup').click();
		cy
			.get('.ui.negative.message')
			.contains('User validation failed: username: is invalid, username contains only alphanumeric characters');
		cy.url().should('eq', URL);
	});
});

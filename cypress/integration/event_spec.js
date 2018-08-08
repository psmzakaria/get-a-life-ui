/// <reference types="Cypress" />
const URL = 'http://localhost:3001/';

const signupUser01 = () => {
	cy.get('#username').clear().type('user01');
	cy.get('#password').type('password01');
	cy.get('#signup').click();
};

const createEvent = () => {
	cy.get('.add.to.calendar.huge.icon').click();
	cy.get('#title').clear().type('My New Event').should('have.value', 'My New Event');
	cy.get('#start').clear().type('10/08/2018').should('have.value', '10/08/2018');
	cy.get('#end').clear().type('25/08/2018').should('have.value', '25/08/2018');
	cy.get('.ui.button').click();
};

const inviteUser01 = () => {
	cy.get('.prompt').type('user01');
	cy.get('.content .title').click();
};

const removeUser01 = () => {
	cy.get('.item').find('.button').contains('-').click();
};

context('Eventpage test', () => {
	beforeEach(() => {
		cy.exec('npm run db:reset');
		cy.visit(URL);
	});

	it('simulate signup and then proceed to create an event then add friends', () => {
		signupUser01();
		cy.url().should('eq', URL + 'user01/events');
		cy.get('.esnap-container-size');

		createEvent();

		inviteUser01();
		cy.get('.item').find('.content').contains('user01');
		cy.get('.actions').find('.button').contains('All Done').click();
		cy.get('.ui.centered.cards').children().should(($div) => {
			expect($div).to.have.length(1);
		});
	});

	it('simulate signup, create an event, add friend then remove', () => {
		signupUser01();
		cy.url().should('eq', URL + 'user01/events');
		cy.get('.esnap-container-size');

		createEvent();

		inviteUser01();
		removeUser01();
		cy.get('.list').should('be.empty');
	});
});

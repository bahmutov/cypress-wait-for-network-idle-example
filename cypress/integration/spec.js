/// <reference types="cypress" />

it('works flawlessly', () => {
  cy.visit('/')
  cy.get('select').select('Second')
  // cy.get('input').type('Hello there')
})

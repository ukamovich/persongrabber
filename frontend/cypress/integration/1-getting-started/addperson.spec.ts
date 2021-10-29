/// <reference types="cypress" />


describe('Test a userstory for adding a person', () => {
    before("Visits the URL for each test",() => {
      cy.intercept("http://localhost:3001/graphql", {_id: "qwdagrerhtfgxfsewt"})
      cy.visit('http://localhost:3000/add-person')
    })

    it('Test for adding a new person"', () => {
       
       })
    





})
  
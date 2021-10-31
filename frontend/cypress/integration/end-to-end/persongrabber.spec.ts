/// <reference types="cypress" />

import { mockdata, searchdata, searchForJan, searchForJanFemale } from "./mockdata"

describe('Test a userstory for searching and filtering', () => {
  before("Visits the URL for each test",() => {
    cy.intercept("http://localhost:3001/graphql", mockdata)
    cy.visit('http://localhost:3000/project3#/')
  })


   it('Testing if Dani Blanket exists', () => {
    const keyword = 'Dani'
    cy.intercept("http://localhost:3001/graphql", searchdata)
    cy.get('#filled-basic').type(`${keyword}`)
    cy.get('.MuiButton-root').click()
    cy.contains('Dani Blanket')

   })

   it('Test search for firstnames that contains "jan"', () => {
    cy.get('#filled-basic').clear()
    const keyword = 'jan'
    cy.intercept("http://localhost:3001/graphql", searchForJan)
    cy.get('#filled-basic').type(`${keyword}`)
    cy.get('.MuiButton-root').click()
    cy.contains('Janean Belton')
    cy.contains('Jan Nam')
    cy.contains('Janet Vasilischev')
    cy.contains('Janeczka Bale')
   })


   it('Test search for Females with firstnames that contains "jan"', () => {
    cy.intercept("http://localhost:3001/graphql", searchForJanFemale)
    cy.get('.css-hpgf8j > .MuiFormControl-root > .MuiFilledInput-root > #demo-simple-select-autowidth').click()
    cy.get('[data-value="Female"]').click()
    cy.get('.MuiButton-root').click()
    cy.contains('Jan Nam')

   })

   
   it('Test information of Jan Nam', () => {
    cy.intercept("http://localhost:3001/graphql", searchForJanFemale)
    cy.get('.profile-card').click()
    cy.contains("617bcbaccbf357aee0231677")
   })












})

  

  

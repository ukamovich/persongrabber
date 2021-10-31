/// <reference types="cypress" />
import {addCarInfo} from './mockdata'

describe('Test a userstory for adding a car', () => {
    before("Visits the URL before the test",() => {
      cy.intercept("http://localhost:3001/graphql", addCarInfo)
      cy.visit('http://localhost:3000/project3#/')
    })

    it("Access the add new car site", () => {
      cy.get('[href="#/add-car"]').click()
    })

    it('Test for adding a new car"', () => {
        cy.intercept("http://localhost:3001/graphql", addCarInfo)
        const name = "Azera"
        const company = "Hyundai"
        const prodyear = 2009
        const price = 11928
        const ownerId = "6166d3941db2c65ddf1bd2b2"

        cy.get(':nth-child(2) > .form-control').type(`${name}`)
        cy.get(':nth-child(4) > .form-control').type(`${company}`)
        cy.get(':nth-child(6) > .form-control').type(`${prodyear}`)
        cy.get(':nth-child(8) > .form-control').type(`${price}`)
        cy.get(':nth-child(10) > .form-control').type(`${ownerId}`)


        cy.get('#submit').click()
        cy.contains("6166d3941db2c65ddf1bd2b2")
       })
})
  


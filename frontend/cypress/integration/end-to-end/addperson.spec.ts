/// <reference types="cypress" />
import {addPersonInfo} from './mockdata'

describe('Test a userstory for adding a person', () => {
    before("Visits the URL before the test",() => {
      cy.intercept("http://localhost:3001/graphql", addPersonInfo)
      cy.visit('http://localhost:3000/project3#/')
    })

    it("Access add new person page", () => {
      cy.get('[href="#/add-person"]').click()
    })

    it('Test for adding a new person"', () => {
        cy.intercept("http://localhost:3001/graphql", addPersonInfo)
        const fname = "Janean"
        const lname = "Belton"
        const email = "jbeltonq6@ezinearticles.com"
        let date = "1925-10-31"
        const bio = "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
        cy.get(':nth-child(2) > .form-control').type(`${fname}`)
        cy.get(':nth-child(4) > .form-control').type(`${lname}`)
        cy.get(':nth-child(6) > .form-control').type(`${email}`)
        cy.get(':nth-child(8) > .form-control').type(`${date}`)
        cy.get('.form-select').select("Female")
        cy.get(':nth-child(12) > .form-control').type(`${bio}`)
        cy.get('#submit').click()
        cy.contains("6166d3941db2c65ddf1bd2b2")
       
       })
    


})
  
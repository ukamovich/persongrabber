/// <reference types="cypress" />


describe('Test a userstory for adding a person', () => {
    before("Visits the URL for each test",() => {
      //cy.intercept("http://localhost:3001/graphql", {_id: "qwdagrerhtfgxfsewt"})
      cy.visit('http://localhost:3000/add-person')
    })

    it('Test for adding a new person"', () => {

        const fname = "Janean"
        const lname = "Belton"
        const email = "jbeltonq6@ezinearticles.com"
        let date = "1925-10-31"
        const bio = "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."

        cy.get(':nth-child(2) > .form-control').type(`${fname}`)
        cy.get(':nth-child(3) > .form-control').type(`${lname}`)
        cy.get(':nth-child(4) > .form-control').type(`${email}`)
        cy.get(':nth-child(5) > .form-control').type(`${date}`)

        //cy.get('.form-select').click().

       // cy.get('[data-value="Genderfluid"]').click()


        //cy.get('[data-value="Genderfluid"]').click()



       
       })
    





})
  
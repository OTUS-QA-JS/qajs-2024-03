/// <reference types="cypress" />

// import { LoginPage } from '../pages/LoginPage'

describe("Auth", () => {
  it("Success auth", () => {
    // const loginPage = new LoginPage()
    //
    // loginPage.login({
    //   email: 'root@mail.net',
    //   password: 'E5dPkCf7bPTnfn6q',
    // })

    cy.login('root@mail.net', 'E5dPkCf7bPTnfn6q')

    cy.contains('A place to share your').click()
    cy.contains('A place to share your').should('be.visible')
    cy.get('a').contains( 'Damir Rysaev Damir Rysaev').should('be.visible')
  })
})

/// <reference types="cypress" />

export class LoginPage {
  url = '/login'

  visit () {
    cy.visit(this.url)
  }

  fillEmail (email) {
    cy.get('[data-testid="input-email"]')
      .type(email)
  }
  
  fillPassword (password) {
    cy.get('[data-testid="input-password"]')
      .type(password)
  }
  
  submitForm () {
    cy.get('[data-testid="btn-submit"]').click()
  }
  
  login ({ email, password }) {
    this.visit()
    this.fillEmail(email)
    this.fillPassword(password)
    this.submitForm()
  }
}

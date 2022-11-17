describe('register', () => {
  it('should be enabled', () => {
    cy.visit('http://localhost:3000/register')

    cy.get('[data-testid="name"]').type("Justin")
    cy.get('[data-testid="age"]').type("14")
    cy.get('.date').type("2022/11/15")
    cy.get('[data-testid="profession"]').select("Student")
    cy.get('[data-testid="locality"]').type("London")
    cy.get('[data-testid="guests"]').type("2")
    cy.get('[data-testid="address"]').type("London")

    cy.get('[data-testid="submit"]').should('be.enabled')
  })

  it('should be disabled', () => {
    cy.visit('http://localhost:3000/register')

    cy.get('[data-testid="submit"]').should('be.disabled')
  })
})
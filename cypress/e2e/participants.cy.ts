describe('participants', () => {
  it('search is found', () => {
    cy.visit('http://localhost:3000/participants')

    cy.get('[data-testid="searchInput"]').type("Justin")
    cy.get('[data-testid="participant"]').should('have.length', 1)
  })
})

describe('product-listing spec', () => {
  it('passes', () => {
    cy.intercept("GET", "https://fakestoreapi.com/products", { fixture: 'products.json' }).as("products");

    cy.visit('http://localhost:5173');

    cy.wait("@products").its('response.statusCode').should('eq', 200);

    cy.get('img').each(img => {
        cy.wrap(img)
          .scrollIntoView()
          .its('0.naturalWidth')   // Note "0" extracts element from jQuery wrapper
          .should('be.greaterThan', 0)
      });

  })
})
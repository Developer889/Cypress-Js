

it('Login Test 1', () => {
    cy.visit('http://127.0.0.1/');
    cy.get('#name').type("ehtesham");
    cy.get('#password').type("PYTHON");
    cy.get('#dsds').click();
    cy.get('#one').type("jyXQ4Q");
    cy.get('.btn').click();
})

it('Login Test 2', () => {
    cy.visit('http://127.0.0.1/');
    cy.get('#name').type("admin");
    cy.get('#password').type("gunie999D");
    cy.get('#dsds').click();
})

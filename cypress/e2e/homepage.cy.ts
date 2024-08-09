describe('Demoblaze Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com');
  });

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should load the homepage correctly', () => {
    cy.title().should('include', 'STORE');
    cy.url().should('include', 'demoblaze.com');
    cy.get('.navbar').should('be.visible');
    cy.get('.carousel').should('be.visible');
  });

  it('should have navigation links', () => {
    cy.get('a.nav-link').contains('Home').should('be.visible').and('not.be.disabled').click();
    cy.get('[data-target="#exampleModal"]').contains('Contact').should('be.visible').and('not.be.disabled');
    cy.get('[data-target="#videoModal"]').contains('About us').should('be.visible').and('not.be.disabled');
    cy.get('a#cartur').contains('Cart').should('be.visible').and('not.be.disabled');

    cy.get('[data-target="#logInModal"]').contains('Log in').should('be.visible').and('not.be.disabled');
    cy.get('a#signin2').contains('Sign up').should('be.visible').and('not.be.disabled');
  });

  it('should check each category link serially', () => {
    cy.get('.list-group-item') // Get all elements from the list
      .not('#cat') // Exclude the `CATEGORIES` element
      .each(($el) => {
        cy.wrap($el).should('be.visible');
        
        // Some additional logs and checks
        cy.wrap($el).invoke('text').then((text) => {
          cy.log(`Checking category: ${text}`);
          // WIP: expand checks
        });

        // Check if the onclick attribute exists
        cy.wrap($el).invoke('attr', 'onclick').should('exist');
      });
  });
});

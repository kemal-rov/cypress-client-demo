describe('Demoblaze Homepage Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com');
    });

    afterEach(() => {
        cy.clear();
    })
  
    it('should load the homepage correctly', () => {
      cy.title().should('include', 'STORE');
      cy.url().should('include', 'demoblaze.com');
      cy.get('.navbar').should('be.visible');
      cy.get('.carousel').should('be.visible');
    });
  
    it('should have navigation links', () => {
      cy.get('a[href="#categoryc"]').should('contain.text', 'CATEGORIES');
      cy.get('a[href="#cart"]').should('contain.text', 'CART');
    });
  });
  
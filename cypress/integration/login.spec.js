describe('WordPress Login Test', () => {
  it('logs in with admin credentials', () => {
    cy.visit('http://127.0.0.1:8080/wp-login.php'); // URL of the WordPress login page
    cy.get('#user_login').type('admin'); // Input admin username
    cy.get('#user_pass').type('admin'); // Input admin password
    cy.get('#wp-submit').click(); // Click login button
    cy.url().should('include', '/wp-admin'); // Check if redirected to WordPress admin
  });
});

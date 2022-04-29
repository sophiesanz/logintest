class LoginPageObject {
    getEmail() {
        return cy.get('[data-label=login-form-email]');
    }
    getPassword() {
        return cy.get('[data-label=login-form-password]');
    }
    getSubmitBtn() {
        return cy.get('button[type="submit"]');
    }
}
export default LoginPageObject;
class GlobalPageObject {
    getAcceptCookiesBtn() {
        return cy.get('button#onetrust-accept-btn-handler');
    }
}

export default GlobalPageObject;
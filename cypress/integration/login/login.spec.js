/* Feature: Login

    Scenario: Search a misspelling word to find content */

import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps'
import loginData from '../../fixtures/loginData.fixture.json'
import LoginPageObject from '../../support/pageObjects/login/login'
import GlobalPageObject from '../../support/pageObjects/global/global'


Given('visitor is on the laserhub login page', () => {
    cy.visit('/login')
    const globalPO = new GlobalPageObject();
    globalPO.getAcceptCookiesBtn().click()
})
When('visitor types the credentials', () => {
    const loginPO = new LoginPageObject();
    loginPO.getEmail().type(loginData.credentials.email)
    loginPO.getPassword().type(loginData.credentials.password)
})
And('clicks on submit button', () => {
    const loginPO = new LoginPageObject();
    loginPO.getSubmitBtn().click()
})
Then('visitor logs in successfully', () => {
    cy.url().should('include', '/product')
    expect(cy.getCookie('session_laserhub')).to.exist
    cy.request('https://app.laserhub.com/login').as('okLogin')
    cy.get('@okLogin').its('status')
        .should('equal', 200)
})

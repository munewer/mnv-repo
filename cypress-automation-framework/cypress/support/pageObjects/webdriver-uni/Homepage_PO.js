/// <reference types="Cypress" />

class Homepage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"))
    }

    click_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    }
}

export default Homepage_PO;
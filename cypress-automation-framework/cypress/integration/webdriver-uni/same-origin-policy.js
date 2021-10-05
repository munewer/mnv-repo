/// <reference types="Cypress" />

describe("Cypress Web Security", () => {

    it("Validate visiting two different domains via user actions", () => {
        cy.visit("/");
        cy.get("#automation-test-store").invoke("removeAttr", "target").click({ force: true });
    });

})
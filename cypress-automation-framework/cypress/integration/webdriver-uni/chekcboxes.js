/// <reference types="Cypress" />

describe("Test Checkboxes via WebdriverUni", () => {

    it("Check and validate checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });

        cy.get('[value="option-1"]').as("option-1")
        cy.get("@option-1").check().should("be.checked");
    });

    it("Uncheck and validate checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });

        cy.get('[value="option-3"]').as("option-3")
        cy.get("@option-3").should("be.checked");
        cy.get("@option-3").uncheck().should("not.be.checked");
    });

})
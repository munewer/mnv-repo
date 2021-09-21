/// <reference types="Cypress" />

describe("Test Checkboxes via WebdriverUni", () => {
    beforeEach(function () {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
    })

    it("Check and validate checkboxes", () => {
        cy.get('[value="option-1"]').as("option-1")
        cy.get("@option-1").check().should("be.checked");
    });

    it("Uncheck and validate checkboxes", () => {
        cy.get('[value="option-3"]').as("option-3")
        cy.get("@option-3").should("be.checked");
        cy.get("@option-3").uncheck().should("not.be.checked");
    });

    it("Check and validate multiple checkboxes", () => {
        cy.get('[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked");
    });
})
/// <reference types="Cypress" />



describe("Test radio buttons via WebdriverUni", () => {

    it("Check and validate first radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });

        cy.get("#radio-buttons").find("[type='radio']").as("buttons");
        cy.get("@buttons").first().check().should("be.checked");
        //check second radio button
        cy.get("@buttons").eq(1).check().should("be.checked");
    });


    it("Validate the states of radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });

        cy.get("[value='lettuce']").should("be.enabled");
        cy.get("[value='lettuce']").should("not.be.checked");

        cy.get("[value='cabbage']").should("be.disabled");

        cy.get("[value='pumpkin']").should("be.checked");
    });


})
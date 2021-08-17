/// <reference types="Cypress" />



describe("Test Contact Us form via WebdriverUni", () => {

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        //cy.document().its('charset').should("eq", "UTF-8");
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
        cy.title().should("eq", "WebDriver | Contact Us");
        cy.url().should("include", "/Contact-Us/contactus.html");
        cy.url().should("eq", "http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("jane");
        cy.get('[name="last_name"]').type("doe");
        cy.get('[name="email"]').type("test@test.com");
        cy.get('[name="message"]').type("comment");
        cy.get('[type="submit"]').click();
        //cy.get('#contact_reply').should("contain", "Thank You for your Message!");
        cy.get('h1').should("have.text", "Thank You for your Message!");
    });

    it("Should not be able to submit successfull submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
        cy.get('[name="first_name"]').type("jane");
        cy.get('[name="last_name"]').type("doe");
        cy.get('[name="message"]').type("comment2");
        cy.get('[type="submit"]').click();
        //cy.get('body').should("contain", "Error: all fields are required")
        //cy.get('body').should("contains", "Error: all fields are required\n Error: Invalid email address")
        cy.get('body').contains("Error: all fields are required")

    });

})
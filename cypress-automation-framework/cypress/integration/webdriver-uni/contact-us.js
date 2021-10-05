/// <reference types="Cypress" />



describe("Test Contact Us form via WebdriverUni", () => {

    before(function () {
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })

    })



    beforeEach(function () {

        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");

    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.title().should("eq", "WebDriver | Contact Us");
        cy.url().should("include", "/Contact-Us/contactus.html");
        cy.url().should("eq", "http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('[name="message"]').type("comment");
        cy.get('[type="submit"]').click();
        cy.get('h1').should("have.text", "Thank You for your Message!");
    });

    it("Should be able to submit a successful submission via contact us form by using Custom command", () => {
        cy.webdriveruni_Contactus_Submission(
            Cypress.env("first_name"),
            data.last_name,
            data.email,
            "custom command was used",
            'h1',
            "Thank You for your Message!")
    });

    it("Should not be able to submit successfull submission via contact us form as all fields are required", () => {
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="message"]').type("comment2");
        cy.get('[type="submit"]').click();
        //cy.get('body').should("contain", "Error: all fields are required")
        //cy.get('body').should("contains", "Error: all fields are required\n Error: Invalid email address")
        cy.get('body').contains("Error: all fields are required")

    });

    it("Should not be able to submit successfull submission via contact us form as all fields are required by using Custom command", () => {
        cy.webdriveruni_Contactus_Submission(
            data.first_name,
            data.last_name,
            " ",
            "custom comment2",
            'body',
            "Error: Invalid email address")
    });

})
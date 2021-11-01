import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types="Cypress" />



describe("Test Contact Us form via WebdriverUni", () => {
    const homepage_PO = new Homepage_PO();
    const contactUs_PO = new Contact_Us_PO();

    before(function () {
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        homepage_PO.visitHomepage();
        homepage_PO.click_ContactUs_Button();
    })

    it("TC-1: Should be able to submit a successful submission via contact us form", () => {
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

    it("TC-2: Should be able to submit a successful submission via contact us form by using Custom command", () => {
        cy.webdriveruni_Contactus_Submission(
            Cypress.env("first_name"),
            data.last_name,
            data.email,
            "custom command was used",
            'h1',
            "Thank You for your Message!")
    });

    it("TC-3: Should be able to submit a successful submission via contact us form by using Page Object Model command", () => {

        contactUs_PO.contactForm_Submission(
            Cypress.env("first_name"),
            data.last_name,
            data.email,
            "Page Object custom command was used",
            'h1',
            "Thank You for your Message!"
        )
    });

    it("TC-4: Should not be able to submit successfull submission via contact us form as all fields are required", () => {
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="message"]').type("comment2");
        cy.get('[type="submit"]').click();
        cy.get('body').contains("Error: all fields are required")

    });

    it("TC-5: Should not be able to submit successfull submission via contact us form as all fields are required by using Custom command", () => {
        cy.webdriveruni_Contactus_Submission(
            data.first_name,
            data.last_name,
            " ",
            "custom comment2",
            'body',
            "Error: Invalid email address")
    });

    it("TC-6: Should not be able to submit successfull submission via contact us form as all fields are required byusing Page Object Model command", () => {
        contactUs_PO.contactForm_Submission(
            Cypress.env("first_name"),
            data.last_name,
            " ",
            "Page Object custom command was used for invalid input",
            'body',
            "Error: Invalid email address"
        )
    });
})
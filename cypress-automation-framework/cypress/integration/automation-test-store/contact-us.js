/// <reference types="Cypress"/>

describe("Test contact us form via Automation Test Store", () => {


    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        //cy.xpath('//a[contains(text(),"Contact Us")]').click({ force: true });
        //cy.xpath('//a[contains(@href,"contact")]').click({ force: true });
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log("the link has text as : " + linkText.text());
        });
        cy.get("#ContactUsFrm_first_name").type("Jane");
        cy.get("#ContactUsFrm_email").type("test@test.com");
        cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
        cy.get("#ContactUsFrm_enquiry").type("comment22222");
        cy.xpath("//*[@title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should("have.text", "Your enquiry has been successfully sent to the store owner!");


    })

})
/// <reference types="Cypress" />

describe("Validating webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
        cy.url().should("include", "contactus");

        //Back to homepage
        cy.go("back");
        cy.reload();
        //cy.reload(true);//reload the page without cache
        cy.url().should("include", "http://www.webdriveruniversity.com/");

        //Go to Contact Use again
        cy.go("forward");
        cy.url().should("include", "contactus");

        //Back to Homepage,then click Login-portal and validate the url
        cy.go("back");
        cy.get("#login-portal").invoke("removeAttr", "target").click({ force: true });
        cy.url().should("include", "Login-Portal");

        //Back to Homepage, then click To-do list link and validate the url
        cy.go("back");
        cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });
        cy.url().should("include", "To-Do-List")
        cy.go("back");
    })

})
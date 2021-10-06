// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProductbyName", (productName) => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.wrap($el).click();
        }
    })
})

Cypress.Commands.add("addProductToBasket", (productName) => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log($el.text);
            cy.get(".productcart").eq(index).click();
        }
    })
})
//Clear default value of text box by entering any selector
Cypress.Commands.add("clearTextbox", ($selector) => {
    cy.get($selector).clear();
})
//Enter any value to textbox by entering any selector and value
Cypress.Commands.add("enterValue", ($selector, value) => {
    cy.get($selector).type(value);
})
//Click by entering selector
Cypress.Commands.add("clickbySelector", ($selector) => {
    cy.get($selector).click();
})

//Custom commands for webdriveruni contactus page submission
Cypress.Commands.add("webdriveruni_Contactus_Submission", (firstname, lastname, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstname);
    cy.get('[name="last_name"]').type(lastname);
    cy.get('[name="email"]').type(email);
    cy.get('[name="message"]').type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);

})

//Navigate to webdriveruni homepage via custom command
Cypress.Commands.add("navigate_To_Webdriveruni_Homepage", () => {
    cy.visit("/");

})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';
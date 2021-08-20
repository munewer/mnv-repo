/// <reference types="Cypress" />

describe("Test dropdown list via WebdriverUni", () => {

    it("Check and validate first radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });

        //Select by value,asser value from first dropdown menu
        cy.get("#dropdowm-menu-1").select("python").should("have.value", "python");
        //Select value, assert text from  2nd dropdown
        cy.get("#dropdowm-menu-2").select("testng").contains("TestNG");
        //Select by value, assert value from 3th dropdown menu
        cy.get("#dropdowm-menu-3").select("javascript").should("have.value", "javascript")

        //Select maven as option by value from  2nd dropdown menu
        cy.get("#dropdowm-menu-2").select("maven").contains("Maven");
        //Select junit as option by text from 3th dropdown menu
        cy.get("#dropdowm-menu-3").select("JQuery").should("have.value", "jquery")
    });
})
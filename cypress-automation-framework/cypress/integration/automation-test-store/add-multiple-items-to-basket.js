import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/Autostore_Homepage_PO";
import Autostore_Haircare_PO from "../../support/pageObjects/automation-test-store/Autostore_Haircare_PO";

///<reference types = "Cypress" />

describe("Add multiple products to the basket", () => {
    //Configure the defaultCommand timeout for specific test suite
    //Cypress.config("defaultCommandTimeout", 20000)
    const AutoStore_Homepage = new AutoStore_Homepage_PO();
    const haircare_PO = new Autostore_Haircare_PO;
    before(function () {
        cy.fixture("products").then((data) => {
            globalThis.data = data
        })
    })


    beforeEach(function () {
        /*  cy.visit(Cypress.env("automationTestStore_homepage"));
         cy.get("a[href*='product/category&path=']").contains("Hair Care").click(); */
        AutoStore_Homepage.accessHomepage();
        AutoStore_Homepage.visitHaircarePage();
    })

    afterEach(function () {
        haircare_PO.clearBasket();
    })

    it("Add specific products to the basket", () => {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element);
        })
        cy.get('.dropdown-toggle > .fa').click();
        cy.get("[class='bold totalamout']").should("contain", "$48.45")
    })

    it("Use Page Object model method and add specific products to basket", () => {
        haircare_PO.addHaircareProductToBasket();
        cy.get("[class='bold totalamout']").should("contain", "$48.45")
    })
});
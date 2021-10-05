///<reference types = "Cypress" />

describe("Add multiple products to the basket", () => {

    before(function () {
        cy.fixture("products").then((data) => {
            globalThis.data = data
        })
    })


    beforeEach(function () {
        cy.visit(Cypress.env("automationTestStore_homepage"));
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })


    it("Add specific products to the basket", () => {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element);
        })
        cy.get('.dropdown-toggle > .fa').click();
        cy.get("[class='bold totalamout']").should("contain", "$48.45")
    })
});
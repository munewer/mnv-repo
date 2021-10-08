class AutoStore_Homepage_PO {
    accessHomepage() {
        cy.visit(Cypress.env("automationTestStore_homepage"));
    }

    visitHaircarePage() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}
export default AutoStore_Homepage_PO;

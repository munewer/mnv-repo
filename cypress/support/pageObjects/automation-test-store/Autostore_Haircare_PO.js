class Autostore_Haircare_PO {

    addHaircareProductToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element);
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
    clearBasket() {
        //cy.get('.dropdown-toggle > .fa').click();
        //Add xpath as hardcoded because of the Cypress issue as https://github.com/cypress-io/cypress/issues/7306
        cy.get("a[href*='checkout/cart&remove=74']").click();
        cy.get("a[href*='checkout/cart&remove=71']").click();
        cy.get("a[href*='checkout/cart&remove=70']").click();
    }

    //Alternative clear basket method when element is detached from DOM , not worked yet.
    /*     clearBasket2() {
            //cy.get('.dropdown-toggle > .fa').click();
            cy.get("a[href*='checkout/cart&remove=']").each(($el, index, $list) => {
                cy.wrap($el).should("be.visible", { timeout: 30000 });
                //cy.window().then(win => win.first = true);
                cy.wrap($el).click({ force: true }, { timeout: 4000 });
                //cy.window().its('first').should('be.undefined');
            })
        } */


}
export default Autostore_Haircare_PO;
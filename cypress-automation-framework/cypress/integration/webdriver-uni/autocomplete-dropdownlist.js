/// <reference types="Cypress" />

describe("Verify autocomplete dropdownlist via WebdriverUni", () => {

    it("Select specific products via autocomplete list", () => {
        cy.visit("/");
        cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click({ force: true });

        cy.get("#myInput").type("A")
        cy.get("#myInputautocomplete-list>*").as("autolist")
        cy.get("@autolist").each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = "Almond";

            if (prod === productToSelect) {
                $el.trigger("click");
                cy.get("#submit-button").click()
                cy.url().should("contain", productToSelect);
            }
        }).then(() => {
            cy.get("#myInput").type("B");
            cy.get("@autolist").each(($el, index, $list) => {
                const prod = $el.text();
                const secondSelection = "Bagels";
                if (prod === secondSelection) {
                    $el.trigger("click");
                    cy.get("#submit-button").click()
                    cy.url().should("contain", secondSelection);
                }
            })

        })
    })
})
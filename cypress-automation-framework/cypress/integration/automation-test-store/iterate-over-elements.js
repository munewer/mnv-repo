///<reference types = "Cypress" />

describe("Iterate over elements", () => {
    beforeEach(function () {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })


    it("Log information of all haircare products", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index" + index + " : " + $el.text());
        })
    });


    it("Click on the specific element", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text() == 'Seaweed Conditioner') {
                //wrap to use cypress commands
                cy.wrap($el).click().then(headerText => {
                    const text = headerText.text();
                    expect(text).to.eq("Seaweed Conditioner");
                    cy.get('#product_quantity').should("have.value", 1);
                    cy.get('.cart').click()
                });
            }
        })
    });


})
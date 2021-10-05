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

    it("Add specific product to basket by using custom command", () => {
        cy.selectProductbyName("Curls to straight Shampoo").then(() => {
            cy.get(".productname .bgnone").contains("Curls to straight Shampoo");
            cy.clearTextbox("#product_quantity");
            cy.enterValue("#product_quantity", 2)
            cy.get('.total-price').should("contain", "$8.00");
            cy.clickbySelector(".cart")
            cy.get("[class='bold totalamout']").should("contain", "$10.00");
            cy.clickbySelector("#cart_checkout2");
            cy.get("#accountFrm_accountguest").check();
            cy.clickbySelector("[title='Continue']");

        });
    })

    it("Click on specific product by using custom command", () => {
        cy.selectProductbyName("Eau Parfumee au The Vert Shampoo").then(() => {
            cy.get(".productname .bgnone").contains("Eau Parfumee au The Vert Shampoo");
            cy.clearTextbox("#product_quantity");
            cy.enterValue("#product_quantity", 2)
            cy.get('.total-price').should("contain", "$62.00");
        });
    })
});
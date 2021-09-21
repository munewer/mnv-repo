///<reference types='Cypress'/>


describe("Alias and invoke", () => {
    beforeEach(function () {
        cy.visit("https://automationteststore.com/");
    })
    it("Validate a specific haircare product", () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as("productThumbnail");
        cy.get('@productThumbnail').its("length").should("be.gt", 5);
        cy.get('@productThumbnail').should("include", "Seaweed Conditioner");
    });

    it("Validate the number of products in the homepage", () => {
        cy.get(".thumbnail").as("thumbnail");
        cy.get("@thumbnail").should("have.length", 16);
        cy.get("@thumbnail").find(".productcart").invoke('attr', "title").should("contain", "Add to Cart");
        cy.get("@thumbnail").find(".productcart").should("have.length", 13);
    })

    it("Calculate total of normal and sale products", () => {
        cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
        cy.get(".thumbnail").find(".pricenew").invoke("text").as("salesItemPrice");
        var itemsTotal = 0;

        //Calculate Non-sales items total price and added to the itemsTotal
        cy.get("@itemPrice").then($linkText => {
            var itemPrice = $linkText.split('$');
            var i;
            var itemPriceTotal = 0;
            for (i = 0; i < itemPrice.length; i++) {
                itemPriceTotal += Number(itemPrice[i]);
                cy.log(itemPrice[i]);
            }
            itemsTotal += itemPriceTotal;
            cy.log("Non-sales price items total :" + itemPriceTotal);
            expect(itemPriceTotal).to.eq(213.7)
        })

        //Calculate Sales items total price and update itemsTotal

        cy.get("@salesItemPrice").then($linkText => {
            var salesItemPrice = $linkText.split('$');
            var j;
            var salesItemPriceTotal = 0;
            for (j = 0; j < salesItemPrice.length; j++) {
                salesItemPriceTotal += Number(salesItemPrice[j]);
                cy.log(salesItemPrice[j]);
            }
            itemsTotal += salesItemPriceTotal;
            cy.log("Sales price items total: " + salesItemPriceTotal);
            expect(salesItemPriceTotal).to.eq(403);
        }).then(() => {
            cy.log("Total price of all products: " + itemsTotal)
            expect(itemsTotal).to.eq(616.7);
        })

    });

});
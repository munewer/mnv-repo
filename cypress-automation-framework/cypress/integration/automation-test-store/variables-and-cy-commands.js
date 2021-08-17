///<reference types = "Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");

        //This will be fail because of the order of execution
        /*  const makeUpLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
         const skinCareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
         makeUpLink.click();
         skinCareLink.click(); */

        //This will work
        /*const makeUpLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        makeUpLink.click();
        const skinCareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        skinCareLink.click(); */


        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();

    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");

        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Header is : " + headerText);
            //Chai assertions
            expect(headerText).is.eq("Makeup");
            expect(headerText).contain("Makeup");
        })


    });


    it.only("Validate properties of Contact Us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should("contain", 'First name:');

        //Jquery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name:');
        })

        //Embeded commands(Closure)
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text()); //First name: *
            cy.log(fnText); //<div#field_11.form-group.form_field>
        })
    });
})
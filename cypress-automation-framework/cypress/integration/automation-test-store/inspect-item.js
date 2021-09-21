///<reference types = "Cypress" />

describe("Inspect Automation Test Store items using change of commands", () => {
    beforeEach(function () {
        cy.visit("https://automationteststore.com/");
    })
    it("Click on the first item using item header", () => {
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });
    it("Click on the first item using item text", () => {
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then(function (itemHeaderText) {
            console.log("Selected the following item :" + itemHeaderText.text());
        });
    });
    it("Click on the first item using index", () => {
        cy.get(".fixed_wrapper").find('.prdocutname').eq(0).click();
    });
})
/// <reference types="Cypress" />

describe("Test mouse actions via WebdriverUni", () => {
    beforeEach(function () {
        cy.visit("/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
    })

    it("Scroll element into view", () => {
        cy.url().should("contain", "Actions");
    });
    it("Validate drag and drop draggable item", () => {
        cy.get("#draggable").trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
    });

    it("Double mouse click on item", () => {
        cy.get("#double-click").dblclick().should("have.class", "div-double-click double");
    });

    it("Perform hold down the left mouse click button on an item and then release", () => {
        cy.get("#click-box").trigger("mousedown", { which: 1 }).then(($element) => {
            expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
            expect($element.text()).contain("Well done! keep holding that click now.....")
        })
        cy.get("#click-box").trigger("mouseup", { force: true }).should("have.text", "Dont release me!!!")
    });
})
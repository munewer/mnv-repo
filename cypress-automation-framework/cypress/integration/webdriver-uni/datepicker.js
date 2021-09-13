/// <reference types="Cypress" />
describe("Test datepicker via webdriveruni", () => {

    it("Select a date from datepicker", () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        cy.get("#datepicker").click();

        let date = new Date();
        date.setDate(date.getDate() + 30)
        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" });
        var futureDay = date.getDate();
        cy.log("Year to select :" + futureYear);
        cy.log("Month to select :" + futureMonth);


        function selectMonthAndYear() {
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get(".next").first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get(".next").first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        selectMonthAndYear();
    });



});

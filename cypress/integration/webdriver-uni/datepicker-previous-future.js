/// <reference types="Cypress" />
describe("Test datepicker via webdriveruni", () => {

    it("Select a date from datepicker", () => {
        cy.visit("/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        cy.get("#datepicker").click();

        let cDate = new Date();
        cDate.setDate(cDate.getDate());
        var cYear = cDate.getFullYear();
        var cMonth = cDate.toLocaleDateString("default", { month: "long" });
        cy.log("Current Year : " + cYear);
        cy.log("Current Month : " + cMonth);

        let date = new Date();
        date.setDate(date.getDate() - 17)
        var Year = date.getFullYear();
        var Month = date.toLocaleString("default", { month: "long" });
        var Day = date.getDate();
        cy.log("Year to select :" + Year);
        cy.log("Month to select :" + Month);
        cy.log("Day to select : " + Day)

        function selectMonthAndYear() {
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate => {
                if (!currentDate.text().includes(Year)) {
                    cy.get(".next").first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate => {
                    if (!currentDate.text().includes(Month)) {
                        cy.get(".next").first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectPreviousMonthAndYear() {
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate => {
                if (!currentDate.text().includes(Year)) {
                    cy.get(".prev").first().click();
                    selectPreviousMonthAndYear();
                }
            }).then(() => {
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate => {
                    if (!currentDate.text().includes(Month)) {
                        cy.get(".prev").first().click();
                        selectPreviousMonthAndYear();
                    }
                })
            })
        }

        function selectDay() {
            cy.get("[class='day']").contains(Day).click();
        }

        if (date < cDate) {
            selectPreviousMonthAndYear();
            selectDay();
        } else {
            selectMonthAndYear();
            selectDay();
        }
    });
});

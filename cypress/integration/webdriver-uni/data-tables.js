/// <reference types="Cypress" />
describe("Handling data via Webdriveruni", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })

    it("Calculate total age of all users", () => {
        var userDetails = [];
        let numb = 0;
        cy.get("#thumbnail-1 td").each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i]);
                }
            }
            cy.log("Total age : " + numb);
            expect(numb).eq(322);
        })
    });

    it("Calculate total age of all users by using nth-child css selector", () => {
        let numb = 0;
        cy.get("#thumbnail-1 td:nth-child(3)").each(($el, index, $list) => {
            let userAge = $el.text();
            numb += Number(userAge)
        }).then(() => {
            cy.log("Total age : " + numb);
            expect(numb).eq(322);
        })
    });

    it("Calcaulate and assert age of a given user based on surname", () => {

        cy.get("#thumbnail-1 td:nth-child(2)").each(($el, index, $list) => {
            const surname = $el.text();
            if (surname.includes("Woods")) {
                cy.get("#thumbnail-1 td:nth-child(2)").eq(index).next().then((age) => {
                    const userAge = age.text();
                    expect(userAge).to.eq("80");
                })
            }
        })
    })


    it("Calculate and assert age of users who has same lastname", () => {
        let numb = 0;
        cy.get("#thumbnail-1 td:nth-child(2)").each(($el, index, $list) => {
            const surname = $el.text();
            if (surname.includes("Jackson")) {
                cy.get("#thumbnail-1 td:nth-child(2)").eq(index).next().then((age) => {
                    let userAge = age.text();
                    numb += Number(userAge)
                })
            }
        }).then(() => {
            cy.log("Total age value : " + numb);
            expect(numb).to.eq(150);
        })

    })
});

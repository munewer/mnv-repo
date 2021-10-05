/// <reference types="Cypress" />

describe("Test file upload via webdriveruni", () => {
    beforeEach(function () {
        cy.visit("/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    })

    it("Upload a file ", () => {
        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click();
        cy.on("window:alert", (str) => {
            expect(str).to.eq("Your file has now been uploaded!");
        })
    });

    it("Upload no file ", () => {
        cy.get("#submit-button").click();
        cy.on("window:alert", (str) => {
            expect(str).to.eq("You need to select a file to upload!");
        })
    });

})
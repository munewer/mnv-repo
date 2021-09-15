/// <reference types="Cypress" />

describe("Test file upload via webdriveruni", () => {

    it("Upload a file ", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });

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
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
        cy.get("#submit-button").click();

        cy.on("window:alert", (str) => {
            expect(str).to.eq("You need to select a file to upload!");
        })
    });

})
class Contact_Us_PO {
    contactForm_Submission(firstname, lastname, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstname);
        cy.get('[name="last_name"]').type(lastname);
        cy.get('[name="email"]').type(email);
        cy.get('[name="message"]').type(comment);
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate);

    }
}
export default Contact_Us_PO;

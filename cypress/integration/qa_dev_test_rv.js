/// <reference types = "cypress" />


it ('Login as a Guest - Access Guest Modal', function(){
    cy.visit(Cypress.env('url'));
    cy.get('[data-test-rd-ui-button="secondary"]').click();
});

it ('User Details - Validation', function(){
    cy.get('#ember314').click();
    cy.get('#ember299').should('have.class','fde-error-message ember-view');
    cy.get('#ember303').should('have.class', 'fde-error-message ember-view');
});

it ('Providing User Details', function(){
    cy.get('#ember297').type(Cypress.env('fullName'));
    cy.get('#ember301').type(Cypress.env('email'));
    cy.get('.fde-phone-number-control_input').type(Cypress.env('phoneNumber'));
    cy.get('#ember309').type(Cypress.env('department'));
    cy.get('#ember312 > #ember312-checkbox').not('[disabled]').check({force: true} ).should('be.checked');
    cy.get('#ember313 > #ember313-checkbox').not('[disabled]').check({force: true} ).should('be.checked')
    cy.get('#ember314').click();
});

it ('Adding Items', function(){
    cy.get(':nth-child(2) > .fde-menu-section_content > .fde-menu-section_items > :nth-child(1) > .fde-restaurant-menu-item > .fde-restaurant-menu-item_header > .fde-restaurant-menu-item_title').click();
    cy.get('textarea').type(Cypress.env('textareaAllergy'));
    cy.get('[data-test-order-item-options-modal-add-modify-button]').click();

});

it('Checking out',function(){
    cy.get('[data-test-checkout-button]').click();
    cy.get('[data-test-form-button').click();
});

it ('Checking out - Validation', function(){
    cy.get('.rd-h1').should('have.class','rd-h1 fde-order-confirmation_title rd-mb-16');
    cy.get('.fde-order-confirmation_information').should('have.class', 'fde-order-confirmation_information rd-lead-paragraph');
});

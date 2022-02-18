describe('Checking boxes', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?id_category=9&controller=category')
    })
    it('Checking boxes with Clic', () => {
        //Usando Clic
        cy.get('#layered_id_attribute_group_1').click() //check con clic
        cy.get('#layered_id_attribute_group_1').should('be.checked')
        cy.get('#layered_id_attribute_group_1').click() //uncheck con clic
        cy.get('#layered_id_attribute_group_1').should('not.be.checked')
    })
    it('Checking boxes with Check', () => {
        //Usando Check
        cy.get('#layered_id_attribute_group_1').check() //check con check
        //should be not checked
        cy.get('#layered_id_attribute_group_1').should('be.checked')
        cy.get('#layered_id_attribute_group_1').uncheck() //uncheck con uncheck
        //should be not checked
        cy.get('#layered_id_attribute_group_1').should('not.be.checked')
    })
})
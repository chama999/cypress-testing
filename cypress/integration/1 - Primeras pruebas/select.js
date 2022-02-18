describe('Usando Selects', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?id_category=9&controller=category')
    })
    it('Order by Selecting by Position', () => {
        //Usando Select with number as value
        cy.get('#selectProductSort').select(2);
    })
    it('Order by Selecting text', () => {
        //Usando Select with a text... Case sensitive!!
        cy.get('#selectProductSort').select('In stock');
    })

})
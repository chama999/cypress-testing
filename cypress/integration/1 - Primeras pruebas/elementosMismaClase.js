describe('Differents Sections with similar class names elements', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?id_category=9&controller=category')
    })
    it('Women section', () => {
        //Una class contiene varios elementos, con first clickeo el primero
        cy.get('[class=sf-with-ul]').first().click()

    })
    it('1st section', () => {
        //Una class contiene varios elementos, con first clickeo el primero
        cy.get('[class=sf-with-ul]').eq(0).click()
    })
    it('2nd section', () => {
        //seleccionando segundo elemento
        cy.get('[class=sf-with-ul]').eq(3).click()
        
    })
})
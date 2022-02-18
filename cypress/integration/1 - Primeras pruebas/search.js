describe('Search testCase', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Search and validate Results', () => {
        //cy.visit('http://automationpractice.com/index.php')
        let searching= 'dress'
        cy.get('#search_query_top').type(searching)
        cy.get('#searchbox > .btn').click()
        cy.get('.lighter').should('contain', searching)
    })
})
describe('Search with Get TestCase', () => {
    
    it('Buscando en Chrome', () => {
        //cy.visit('http://automationpractice.com/index.php')
        cy.get('.search_query.form-control.ac_input').type('busquedaClass') //buscamos por class
        cy.get('#search_query_top').type(' busquedaId') //busqueda por id
        cy.get('[name="search_query"]').type(' busquedaName') //busqueda por name
        //ahora limpiamos y buscamos "busquedaPlaceholder"
        cy.get('[placeholder="Search"]').clear().type(' busquedaPlaceholder') //busqueda por placeholder

    })
})
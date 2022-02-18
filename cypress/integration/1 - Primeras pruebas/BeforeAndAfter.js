describe('busqueda', () => {
    before(() => {
        //se ejecuta al incio
        cy.log('beforeUnloadEvent--Loging || Precondiciones generales, se ejecuta al inicio')
    })
    beforeEach(() => {
        //Se ejecuta antes de cada test
        cy.visit('http://automationpractice.com/index.php')
    })
    afterEach(() => {
        //se ejecuta posterior a cada test
        cy.log('afterEach--Loging || PostCondiciones luego de cada testCase')
    })

    it('writeAndClearSearchElement', () => {
        cy.get('#search_query_top').clear().type('BuscandoNuevaPalabra') //buscamos por class
    })
    it('writeAndClearSearchElement', () => {
        cy.get('#search_query_top').clear().type('BuscandoNuevaPalabra2222') //buscamos por class
    })
    it('writeAndClearSearchElement', () => {
        cy.get('#search_query_top').clear().type('searching again') //buscamos por class
    })
    after(() => {
        //se ejecuta al final
        cy.log('afterUnloadEvent--Loging ||Finally... Postcondiciones')
    })
})
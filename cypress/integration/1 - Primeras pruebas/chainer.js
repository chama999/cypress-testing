describe('busquedaEncadenada', () => {
    it('writeAndClearSearchElement', () => {
        cy.get('#search_query_top').type('First Search').clear().type('searching again').clear().type('Final Search') //buscamos por class
    })
})
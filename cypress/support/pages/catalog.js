class catalogPage {
    validateSearch = (data) => {

        cy.logSpecFormat('Validando busqueda')
        cy.fixture('catalog.json').then(catalog => {
            cy.get(catalog.searchElement).contains(data)
        })
        //cy.get(this.searchElement).should('contain', data)
    }
}
export default new catalogPage()
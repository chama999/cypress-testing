class indexPage {

    visit() {
        //obtengo url de index.json.
        cy.fixture('index.json').then(index => {
            cy.visit(index.url)
        })
        
    }
    
    search = (data) => {

        /*
        Hago lo mismo sin usar constructor. Solo leyendo desde json
        las variables de la clase indexPage.
        cy.get(this.searchElement).clear().type(data)
        cy.get(this.searchButton).click()*/

        cy.fixture('index.json').then(index => {
            cy.get(index.searchElement).clear().type(data)
            cy.get(index.searchButton).click()
        })
    }
}
export default new indexPage()
//ejecutar con el comando: ./node_modules/.bin/cypress run
//sirve para ci/cd, para entornos donde no hay explorer o gui
//para correr un solo archivo test.js
// .node_modules/.bin/cypress run --spec cypress/integration/elementosMismaClase.js

describe('Headless', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Headless', () => {
        //cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('Dress')
    })
})
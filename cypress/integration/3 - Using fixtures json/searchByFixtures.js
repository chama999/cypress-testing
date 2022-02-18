import indexPage from '../../support/pages/index'
import catalogPage from '../../support/pages/catalog'


describe('Search testCase', () => {
    beforeEach(() => {
        //url y open page en index.js
        indexPage.visit()
    })

    it('Search and validate Results using PageObject', () => {
        //cy.visit('http://automationpractice.com/index.php')
        //llamamos a IndexPage y buscamos dress
        indexPage.search('dress')

        catalogPage.validateSearch('"dress"')
    })
})
describe('Other test case doing same', () => {
    
    it('Buscando en Chrome', () => {
        indexPage.search('shirt')
        catalogPage.validateSearch('"shirt"')
    })
})
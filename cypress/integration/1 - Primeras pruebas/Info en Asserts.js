

describe('asserts', () => {
    let a = 'prueba'
    let b = 100
    let c = 2
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Igualdad', () => {
        // uno igual 2 --> va a fallar
        expect(1,"No son iguales los valores analizados.").to.equal(2)

        // 1=1 igual a true
        expect(1==1).to.equal(true)

        // 2=2 igual a true
        expect(2==2).to.be.true
    })

    it('Diferente', () => {
        // 1=2 no igual a true
        expect(1==2).to.equal(false)
    })
    it('Resta OK', () => {
        //1-1 igual a 0
        expect(1-1).to.equal(0)
    })
    it('Resta Not OK', () => {
        //1-2 no igual a 0
        expect(1-2).to.not.equal(0)
    })
    it('Variable existe?', () => {
        //a existe?
        expect(a).to.exist;
    })
    it('Mayor que y Menor que', () => {
        //Si no es mayor devuelve mensaje de error
        expect(b,"La variable B no es mayor a 233").to.be.above(233)
        //b mayor que 100
        expect(b).to.be.greaterThan(99)
        //c mayor 3
        expect(c).to.not.be.lessThan(1) //falla
    })
})
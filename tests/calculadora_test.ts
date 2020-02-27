import {Calculadora} from "../src/calculadora"
import {CalculadoraBinaria, Conversor} from "../src/calculadoraBinaria"

describe("Prueba de calculadora", () => {
    let calculadora : Calculadora

    beforeAll(()=>{
        calculadora = new Calculadora()
    })
    beforeEach(()=>{
        //xd
    })
    afterEach(()=>{
        //xd
    })
    afterAll(()=>{
        calculadora = null
    })

    it("Suma de 2 numeros positivos", () => {
        let resEsperado = 3
        let resObtenido = calculadora.sumar(1, 2)

        expect(resEsperado).toEqual(resObtenido)
    })
    it("Suma de 2 numeros negativos", () => {
        let resEsperado = -3
        let resObtenido = calculadora.sumar(-1, -2)

        expect(resEsperado).toEqual(resObtenido)
    })
    it("Suma de 2 ceros", () => {
        let resEsperado = 0
        let resObtenido = calculadora.sumar(0, 0)

        expect(resEsperado).toEqual(resObtenido)
    })
})

describe("Prueba de calculadora binaria", () => {
    it("Sumar", () => {
        let sum1 = "10"
        let sum2 = "11"
        let resEsperado = "101"
        
        let conversor = new Conversor()

        spyOn(conversor, "btd").and.callFake((num : string) => {
            if (num == "10") {return "2"}
            else if (num == "11") {return "3"}
            else {return ""}
        })

        spyOn(conversor, "dtb").and.callFake((num : string) => {
            if (num == "5") {return "101"}
            else {return ""}
        })

        let cb = new CalculadoraBinaria(conversor)
        let resObtenido = cb.sumar(sum1, sum2)

        expect(resEsperado).toEqual(resObtenido)
    })
})
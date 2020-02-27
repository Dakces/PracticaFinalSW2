export class Conversor {
    btd(num : string) {
        return ""
    }
    dtb(num : string) {
        return ""
    }
}

export class CalculadoraBinaria {
    conversor : Conversor
    constructor(conversor : Conversor) {
        this.conversor = conversor
    }
    sumar(sum1 : string, sum2 : string) {
        let sum1Dec = this.conversor.btd(sum1)
        let sum2Dec = this.conversor.btd(sum2)
        let res = parseInt(sum1Dec) + parseInt(sum2Dec)
        return this.conversor.dtb(res.toString())
    }
}
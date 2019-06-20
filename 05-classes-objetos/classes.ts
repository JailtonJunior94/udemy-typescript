class Data {

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    dia: number
    mes: number
    ano: number
}

const aniversario = new Data(6, 1, 1994)
const casamento = new Data()

class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) { }
}

const aniversarioEsperto = new DataEsperta(6, 1, 1994)
const casamentoEsperto = new DataEsperta

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) { }

    public resumo(): string {
        return `${this.nome} custa R$ ${this.preco} (${this.desconto * 100}% OFF)`
    }
}

const prod1 = new Produto('Caneta Bic Preta', 4.20, 0.06)
console.log(prod1.resumo())

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

class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) { }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'KA', 185)
Array(50).fill(0).forEach(() => carro1.acelerar())

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return super.alterarVelocidade(20)
    }

    public frear(): number {
        return super.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 325)
console.log(f40.acelerar())
console.log(f40.frear())

class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)
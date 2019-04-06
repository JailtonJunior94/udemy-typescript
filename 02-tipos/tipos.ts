// string 
let nome: string = 'Joao'
console.log(nome)

// numbers
let idade: number = 25
console.log(idade)

// boolean 
let possuiHobbies: boolean = false
console.log(possuiHobbies)

// typos explícitos
let minhaIdade: number
minhaIdade = 25
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 25'
// console.log(typeof minhaIdade)

// array
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)

// tuplas 
let endereco: [string, number, string] = ['Av Principal', 99, '']
console.log(endereco)

endereco = ['Rua importante', 1260, 'Bloco C']
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 2 // 2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

// any
let carro: any = 'BMW'
console.log(carro)

carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funcões
function retornaMeunome(): string {
    return nome
}
console.log(retornaMeunome())

function digaOi(): void {
    console.log('Oi')
}
digaOi()

function multiplicar(numA: number, numbB: number): number {
    return numA * numbB
}
console.log(multiplicar(2, 5))

// tipo função
let calculo: (numeroA: number, numeroB: number) => number
calculo = multiplicar
console.log(calculo(5, 6))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}
console.log(usuario)

// type
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

// union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)

// Checando tios 
let valor = 30
if (typeof valor === "number") {
    console.log('É um number!')
} else {
    console.log(typeof valor)
}

// tipo never
function falha(msg: string): never {
    throw new Error(msg)
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome')
        }
        if (this.preco <= 0) {
            falha('Preço inválido!')
        }
    }
}

produto.validarProduto()

// null
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '9898997',
    tel2: null
}

console.log(contato1)
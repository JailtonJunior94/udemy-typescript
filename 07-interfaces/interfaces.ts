interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any,
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Skywalker')

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date()
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

const meuClient = new Cliente()
meuClient.nome = 'Han'
saudarComOla(meuClient)
meuClient.saudar('Solo')
console.log(meuClient.ultimaCompra)

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function (base: number, expoente: number): number {
    return base ** expoente;
}

console.log(potencia(3, 10))

// Herança 
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {
        throw new Error("Method not implemented.");
    }
}

class RealAB implements A, B {
    a(): void {
        throw new Error("Method not implemented.");
    }
    b(): void {
        throw new Error("Method not implemented.");
    }
}

class RealABC implements ABC {
    a(): void {
        throw new Error("Method not implemented.");
    }
    b(): void {
        throw new Error("Method not implemented.");
    }
    c(): void {
        throw new Error("Method not implemented.");
    }
}

abstract class ABD implements A, B {
    a(): void {
        throw new Error("Method not implemented.");
    }
    b(): void {
        throw new Error("Method not implemented.");
    }
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function () {
    console.log(this.toString());
}

const x = 2
const y = 3
const j = 4

x.log()
y.log()
j.log()

const cli = {
    nome: 'Pedro',
    toString() { return this.nome }
}
cli.log()
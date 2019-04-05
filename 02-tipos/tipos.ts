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
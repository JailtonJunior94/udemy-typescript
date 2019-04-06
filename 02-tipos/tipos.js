"use strict";
// string 
let nome = 'Joao';
console.log(nome);
// numbers
let idade = 25;
console.log(idade);
// boolean 
let possuiHobbies = false;
console.log(possuiHobbies);
// typos explícitos
let minhaIdade;
minhaIdade = 25;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 25'
// console.log(typeof minhaIdade)
// array
let hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas 
let endereco = ['Av Principal', 99, ''];
console.log(endereco);
endereco = ['Rua importante', 1260, 'Bloco C'];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; // 2
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funcões
function retornaMeunome() {
    return nome;
}
console.log(retornaMeunome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numbB) {
    return numA * numbB;
}
console.log(multiplicar(2, 5));
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
// Checando tios 
let valor = 30;
if (typeof valor === "number") {
    console.log('É um number!');
}
else {
    console.log(typeof valor);
}
// tipo never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
// null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '9898997',
    tel2: null
};
console.log(contato1);

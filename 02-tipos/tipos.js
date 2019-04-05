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

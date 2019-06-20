"use strict";
// let & const
let seraQuepode = '?';
console.log(seraQuepode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casado!';
    console.log(acao);
}
const cpf = '430.406.068-67';
// cpf = '999.999.999=99'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = 'def';
    console.log(def);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
//||
function subtrair(n1, n2) {
    return n1 - n2;
}
console.log(somar(2, 2));
console.log(subtrair(2, 2));
// retorno implicito 
const multiplicarArrow = (n1, n2) => n1 * n2;
console.log(multiplicarArrow(1, 5));
const saudacao = () => console.log('Olá');
saudacao();
const falarCom = (pessoa) => console.log(`Olá ${pessoa}`);
falarCom('João');
// this (pode variar)
// function normalComThis() {
//     console.log(this)
// }
// const normalComThisEspecial = normalComThis.bind(2);
// normalComThisEspecial()
// normalComThis()
// const arrowComThis = () => console.log(this)
// arrowComThis()
// parâmetro padrão
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagemRegressiva();
contagemRegressiva(8);
//  Operador Spread & Rest
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2);
console.log(numeros);
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
// Destructuring (array)
const caracteristicas = ['Moto Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
const [w, z] = [2, 3];
// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        c: 'Importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
const { nome: n, preco: p, caracteristicas: { c } } = item;
console.log('nome: ', n);
console.log('preço: ', p);
console.log('caracteristicas: ', c);
// Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
// Promisse
function esperar3sPromisse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('3s depois...');
        }, 3000);
    });
}
esperar3sPromisse()
    .then(data => console.log(data))
    .catch(error => console.log(error));
fetch('https://swapi.co/api/people/1')
    .then(response => response.json())
    .then(person => person.films)
    .then(films => fetch(films[0]))
    .then(res => res.json())
    .then(film => console.log(film.title));

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

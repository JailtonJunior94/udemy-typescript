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

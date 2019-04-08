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

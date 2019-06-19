"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João'));
console.log(echo(27));
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João'));
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// Usando Generics Array
const avaliacoes = [10, 9.3, 7, 7];
avaliacoes.push(8.4);
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(element => console.log(element));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia']);
imprimir([{ nome: 'Fulano', idade: 22 }]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Classe com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinaria('Bom', 'dia').executar());
console.log(new OperacaoBinaria(3, 7).executar());
console.log(new OperacaoBinaria(3, 'Opa').executar());

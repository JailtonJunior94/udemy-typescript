function echo(objeto: any): any {
    return objeto;
}

console.log(echo('João'))
console.log(echo(27))
console.log(echo({ nome: 'João', idade: 27 }))

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto;
}

console.log(echoMelhorado<string>('João'))
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27 }))

// Usando Generics Array
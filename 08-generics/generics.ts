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
const avaliacoes: Array<number> = [10, 9.3, 7, 7]
avaliacoes.push(8.4)
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(element => console.log(element))
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Ana', 'Bia'])
type Aluno = { nome: string, idade: number }
imprimir<Aluno>([{ nome: 'Fulano', idade: 22 }])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Classe com Generics
class OperacaoBinaria<T> {
    constructor(public operando1: any, public operando2: any) { }

    executar() {
        return this.operando1 + this.operando2
    }
}

console.log(new OperacaoBinaria('Bom', 'dia').executar())
console.log(new OperacaoBinaria(3, 7).executar())
console.log(new OperacaoBinaria(3, 'Opa').executar())

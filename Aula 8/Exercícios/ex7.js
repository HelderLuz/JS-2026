// 7. Implementar um programa que, dado um número inteiro informado pelo usuário, calcule o fatorial desse número. O fatorial de um número (n!) é o produto de todos os inteiros positivos menores ou iguais a ele. Por exemplo, 4! = 4×3×2×1. Por definição, 0! = 1.

let numero = Number(prompt('Digite o número'))
let fatorial = 1

if (numero >= 0) {
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
        console.log(`${i}! = ${fatorial}`)
    }
} else {
    console.log('Fatorial inválido!')
}
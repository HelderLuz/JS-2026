// 9. Escreva um programa que leia uma sequência de números (quantidade definida pelo usuário) e exiba quantos números são positivos, negativos e zeros.

let positivos = 0
let negativos = 0
let zeros = 0
let qtd = Number(prompt('Digite a quantidade de números'))

for (let i = 0; i < qtd; i++) {
    let numero = Number(prompt(`Número ${i+1}: `))

    if (numero === 0)
        zeros++
    else if (numero > 0) 
        positivos++
    else
        negativos++
}
console.log(`Positivos: ${positivos} \nNegativos: ${negativos} \nZeros: ${zeros}`)
// 6. Escreva um programa que solicite ao usuário números inteiros positivos até que ele digite um número negativo. O programa deve somar todos os números positivos e, ao final, exibir a soma.

let numero = 0
let soma = 0

while (numero >= 0) {
    numero = Number(prompt('Digite um número (negativo para parar)'))

    if (numero > 0) {
        soma += numero
    }
}

console.log(`Resultado: ${soma}`)
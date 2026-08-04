// 1. Crie um programa que verifique e informe se um número é positivo, negativo ou zero.

let numero = Number(prompt("Digite um número: "))

if (numero > 0) {
    console.log('O número é positivo!')
} else if (numero < 0) {
    console.log('O número é negativo!')
} else {
    console.log('O número é igual a zero!')
}
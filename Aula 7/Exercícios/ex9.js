// 9. Escreva um programa que simule uma calculadora simples. O programa deve receber dois números e uma operação (+, -, *, /). O resultado da operação deve ser exibido.

let num1 = Number(prompt('Digite o número 1: '))
let num2 = Number(prompt('Digite o número 2: '))
let op = prompt('Digite a operação: ')

if (op == '+') {
    console.log(`O resultado da soma é ${num1 + num2}`)
} else if (op == '-') {
    console.log(`O resultado da subtração é ${num1 - num2}`)
} else if (op == '*') {
    console.log(`O resultado da multiplicação é ${num1 * num2}`)
} else if (op == '/') {
    console.log(`O resultado da divisão é ${num1 / num2}`)
} else {
    console.log('Operação inválida!')
}
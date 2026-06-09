// 6. Implementar um programa que, dados dois valores de entrada informados pelo usuário, troque os valores entre as variáveis iniciais.

let valor1 = prompt('Digite um valor')
let valor2 = prompt('Digite outro valor')

let aux = valor1
valor1 = valor2
valor2 = aux


console.log(`Valor1: ${valor1} | Valor2: ${valor2}`)
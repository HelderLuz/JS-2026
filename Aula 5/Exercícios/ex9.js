// 9. Implementar um programa que, dada uma quantidade de litros de abastecimento e o preço em reais do combustível informados pelo usuário, calcule e apresente o valor total do abastecimento. Formate a saída para que seja apresentada com duas casas decimais.

let litros = Number(prompt('Digite a quantidade de litros'))
let preco = Number(prompt('Digite o preço/litro'))

let valorTotal = litros * preco

console.log(`Valor total: R$${valorTotal.toFixed(2)}.`)
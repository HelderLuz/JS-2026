// 4. Dado o array const numeros = [1, 2, 3, 4, 5];, use reduce para calcular a soma de todos os números.

const numeros = [1, 2, 3, 4, 5]

const total = numeros.reduce((soma, numero) => soma + numero)

console.log(total)
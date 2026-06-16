// 7. Use uma expressão condicional para verificar se um número é positivo e maior que 100 ou negativo.

let numero = Number(prompt('Digite um número'))

let condicao = numero > 100 || numero < 0

console.log(`O número é positivo e maior que 100 ou negativo? ${condicao}`)
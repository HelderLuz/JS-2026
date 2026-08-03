// 8. Verifique se dois números são iguais e se ambos são maiores que 10 usando expressão condicional.

let num1 = Number(prompt('Digite o n1: '))
let num2 = Number(prompt('Digite o n2: '))

let condicao = (num1 == num2) && (num1 > 10)

console.log(`Números iguais e maior que 10? ${condicao}`)
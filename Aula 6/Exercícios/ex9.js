// 9. Receba dois números e verifique se pelo menos um deles é negativo com expressão condicional.

let num1 = Number(prompt('Digite o n1: '))
let num2 = Number(prompt('Digite o n2: '))

console.log(`Um dos números é negativo? ${num1 < 0 || num2 < 0}`)
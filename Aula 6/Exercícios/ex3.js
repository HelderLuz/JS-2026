// Qual é o valor da variável resultado ao final da execução do código? Encontre o valor sem executar o código.

let a = 12
let b = 5
let c = 8
let d = 3
let resultado = ((a / b > 2) && (c % d == 2)) || (!(a - c < d) && (b * d <= a))

// resultado = ((12 / 5 > 2) && (8 % 3 == 2)) || (!(12 - 8 < 3) && (5 * 3 <= 12))
// resultado = ((2,4 > 2) && (2 == 2)) || (!(4 < 3) && (15 <= 12))
// resultado = (true && true) || (!false && false)
// resultado = (true && true) || (true && false)
// resultado = true || false
// resultado = true
console.log(resultado)
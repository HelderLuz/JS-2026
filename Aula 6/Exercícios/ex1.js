// Qual é o valor da variável resultado ao final da execução do código? Encontre o valor sem executar o código.

let x = 7
let y = 3
let z = 2
let resultado = (x % y != 1) || (z ** 2 < x && y != z)

// resultado = (7 % 3 != 1) || (2 ** 2 < 7 && 3 != 2)
// resultado = (1 != 1) || (4 < 7 && true)
// resultado = (false) || (true && true)
// resultado = (false) || (true)
// resultado = true
console.log(resultado)

// 10. Dado um número, use expressão condicional para averiguar se o número é múltiplo de 3 e 5 ao mesmo tempo.

let num = Number(prompt('Digite o número: '))

console.log(`O número é múltiplo de 3 e 5? ${(num % 3 == 0 && num % 5 == 0)}`)
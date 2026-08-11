// 7. Escreva um programa que leia um número e informe se ele é:
// múltiplo de 2 e de 3 ao mesmo tempo
// apenas múltiplo de 2
// apenas múltiplo de 3
// não é múltiplo de nenhum dos dois

let numero = Number(prompt('Digite um número: '))

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log('O número é múltiplo de 2 e 3')
} else if (numero % 2 === 0) {
    console.log('O número é múltiplo de 2')
} else if (numero % 3 === 0) {
    console.log('O número é múltiplo de 3')
} else {
    console.log('O número não é multiplo de 2 ou 3')
}
// Leia um array de 12 números e depois dois valores X e Y correspondentes a posições no array. Escreva a soma dos valores nas posições X e Y.

numeros = []

for (let i = 0; i < 12; i++) {
    const numero = Number(prompt(`[${i + 1}]`))
    numeros.push(numero)
}
console.log(numeros)

const x = parseInt(prompt('Digite o índice X: '))
const y = parseInt(prompt('Digite o índice Y: '))
console.log(`${numeros[x]} + ${numeros[y]} = ${numeros[x] + numeros[y]}`)
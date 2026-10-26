// 4. Usando prompt(), leia um array de 10 números e em seguida um valor X. Busque X e informe a posição em que foi encontrado (ou “não encontrado”) na lista.

const numeros = []

for (let i = 0; i < 4; i++) {
    const numero = parseInt(prompt(`Digite o número [${i+1}]: `))
    numeros.push(numero)
}

console.log(numeros)

const X = parseInt(prompt('Digite o número para buscar: '))

const indice = numeros.indexOf(X)

if (indice === -1) {
    console.log("Não encontrado")
} else {
    console.log(`Número encontrado na posição ${indice + 1}`)
}
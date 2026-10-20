// Declare um array e preencha-o apenas com números ímpares informados pelo usuário até ter 10 elementos. Ao final, apresente o array.

const impares = []

while (impares.length < 10) {
    const numero = parseInt(prompt('Digite um número inteiro'))

    if (numero % 2 === 1)
        impares.push(numero)
}

console.log('Ímpares:', impares)
// 6. Implemente uma função que apresente o resultado da equação exponencial  de cada número de um array.

const numeros = [1, 2, 3, 4, 5]

function exponencial(lista) {
    return numeros.map(numero => numero ** 2)
}

console.log(exponencial(numeros))
// 8. Faça uma função que retorne todos os números impares de um array.

const numeros = [1, 2, 3, 4, 5]

function impares(lista) {
    return lista.filter(numero => numero % 2 === 1)
}

console.log(impares(numeros))
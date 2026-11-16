// 7. Implemente uma função que receba um vetor de números e retorne um vetor de Strings.

const numeros = [1, 2, 3, 4, 5]

function numerosParaStrings(lista) {
    return numeros.map(numero => numero.toString())
}

console.log(numerosParaStrings(numeros))
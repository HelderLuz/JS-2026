// 1. Crie uma matriz 3x3 representada por uma lista de listas e:
// Imprima todos os elementos da matriz.
// Calcule a soma dos elementos da diagonal principal.

function imprimirMatriz(matriz) {
    console.log('Matriz')
    for (const linha of matriz) {
        for (const valor of linha) {
            console.log(valor)
        }
    }
    console.log()
}

function somaDiagonalPrincipal(matriz) {
    let soma = 0
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i]
    }
    console.log(`Soma da diagonal principal é ${soma}`)
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

imprimirMatriz(matriz)
somaDiagonalPrincipal(matriz)
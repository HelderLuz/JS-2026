// 6. Escreva duas funções, uma que encontre o maior valor de um array de números, e outra que encontre o menor.

function maior(numeros) {
    let maiorNumero = numeros[0]

    for (numero of numeros) {
        if (numero > maiorNumero)
            maiorNumero = numero
    }

    return maiorNumero
}

function menor(numeros) {
    let menorNumero = numeros[0]

    for (numero of numeros) {
        if (numero < menorNumero)
            menorNumero = numero
    }

    const indice = numeros.indexOf(menorNumero)

    return [indice, menorNumero]
}

const lista = [6, 2, 89, 3, 32, 7, 95, 3, 34, 547, 5, 734532, 45]
const resultado = menor(lista)
console.log(`Maior número: ${maior(lista)}`)
console.log(`Menor número: ${resultado[1]} Índice: ${resultado[0]}`)
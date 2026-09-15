// 4. Escreva uma função chamada somaImpares que receba um número inteiro positivo n e retorne a soma de todos os números ímpares de 0 até n.

/**
 * Verifica se o número é par ou ímpar.
 * 
 * @param {number} numero - número para ser verificado.
 * @returns {string} retorna o texto dizendo se é par ou ímpar
 */

function ehImpar(numero) {
    return numero % 2 === 1
}

/**
 * Soma  todos os números ímpares entre 1 e N.
 * @param {number} n - número limite do intervalo
 * @returns {number} Retorna a somatória dos números ímpares.
 */
function somaImpares(n) {
    let soma = 0
    for (let i = 1; i <= n; i++) {
        if (ehImpar(i)) {
            soma += i
        }
    }
    return soma
}

let numero = Number(prompt('Digite o número'))
console.log(`Resultado da soma: ${somaImpares(numero)}`)
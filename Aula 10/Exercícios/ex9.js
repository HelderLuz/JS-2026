// 9. Escreva duas funções, uma chamada ehMenor e outra ehMaior, que recebem três números e retorne o menor e o maior valor entre eles, respectivamente.

/**
 * Retorna o menor número.
 * @param {number} n1 
 * @param {number} n2 
 * @param {number} n3 
 * @returns {number} retorna o menor número entre os 3.
 */
function ehMenor(n1, n2, n3) {
    let menor = n1
    if (menor > n2) {
        menor = n2
    }
    if (menor > n3) {
        menor = n3
    }
    return menor
}

/**
 * Retorna o maior número.
 * @param {number} n1 
 * @param {number} n2 
 * @param {number} n3 
 * @returns {number} retorna o maior número entre os 3.
 */
function ehMaior(n1, n2, n3) {
    let maior = n1
    if (maior < n2) {
        maior = n2
    }
    if (maior < n3) {
        maior = n3
    }
    return maior
}

console.log(`Maior: ${ehMaior(7, 7, 7)}`)
console.log(`Menor: ${ehMenor(1, 1, 1)}`)
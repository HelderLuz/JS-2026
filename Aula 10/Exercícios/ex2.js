// 2. Escreva uma função em JavaScript que verifique se um número é par ou ímpar.

/**
 * Verifica se o número é par ou ímpar.
 * 
 * @param {number} numero - número para ser verificado.
 * @returns {string} retorna o texto dizendo se é par ou ímpar
 */
function ehPar(numero) {
    // return numero % 2 === 0
    if (numero % 2 === 0) {
        return 'É par'
    }
    return 'É impar'
}

console.log(`4: ${ehPar(4)}`)
console.log(`5: ${ehPar(5)}`)
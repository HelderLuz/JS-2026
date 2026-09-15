//3. Escreva uma função chamada ehPrimo que receba um número inteiro positivo e retorne true se for um número primo, e false caso contrário.

/**
 * Verifica se o número é primo
 * 
 * @param {number} numero - número para verificar se é primo
 * @returns {string} Retorna uma string dizendo se é primo ou não é primo.
 */
function ehPrimo(numero) {
    if (numero === 1)
        return 'Não é primo'
    for (let i = 2; i < numero - 1; i++) {
        if (numero % i === 0)
            return 'Não é primo'
    }
    return 'É primo'
}

let numero = Number(prompt('Digite o número: '))
console.log(` ${ehPrimo(numero)}`)
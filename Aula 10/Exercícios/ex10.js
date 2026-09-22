// 10. Escreva uma função chamada calcularPrecoFinal que receba o valor de uma compra e retorna o preço descontado com:
// 10% de desconto se valor >= 1000
// 5% de desconto se valor >= 500
// Sem desconto se valor < 500

/**
 * Calcula o preço final do produto com desconto aplicado.
 * @param {number} valor - preço cheio
 * @returns {number} preço com desconto
 */
function calcularPrecoFinal(valor) {
    if (valor >= 1000) {
        return valor - (valor * 0.1)
    }
    if (valor >= 500) {
        return valor - (valor * 0.05)
    }
    return valor
}

console.log(`Valor final ${calcularPrecoFinal(1500)}`)
console.log(`Valor final ${calcularPrecoFinal(500)}`)
console.log(`Valor final ${calcularPrecoFinal(400)}`)
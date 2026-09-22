// 7. Implementar uma função que calcule o Índice de Massa Corpórea(IMC), dados o peso e a altura informados pelo usuário.
// Fórmula do IMC: peso / (altura * altura)

/**
 * 
 * @param {number} peso - peso da pessoa
 * @param {number} altura - altura da pessoa
 * @returns {number} retorna o IMC da pessoa
 */
function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

let peso = Number(prompt('Digite o peso: '))
let altura = Number(prompt('Digite o altura: '))

console.log(calcularIMC(peso, altura))
// 8. Crie uma função chamada classificarIMC que receba o IMC e retorne a classificação:

// Abaixo do peso: IMC < 18.5
// Peso normal: 18.5 <= IMC < 25
// Sobrepeso: 25 <= IMC < 30
// Obesidade: IMC >= 30

/**
 * 
 * @param {number} imc -IMC da pessoa
 * @returns {string} Retorna a classificação baseada no IMC
 */
function classificarIMC(imc) {
    if (imc < 18.5) 
        return "Abaixo do peso"
    if (imc < 25)
        return "Peso normal"
    if (imc < 30)
        return "Sobrepeso"
    return "Obesidade"
}

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
let imc = calcularIMC(peso, altura)
console.log(`IMC: ${imc.toFixed(2)} \nClassificação: ${classificarIMC(imc)}`)
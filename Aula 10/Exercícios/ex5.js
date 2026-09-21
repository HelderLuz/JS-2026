//5. Escreva uma função chamada converterCelsiusParaFahrenheit que converta temperatura de Celsius para Fahrenheit. Fórmula: 

/**
 * @param {number} celsius - recebe a temperatura em Celsius
 * @returns {number} retorna a temperatura em Fahrenheit
 */

function converterCelsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32
}

let fahrenheit = converterCelsiusParaFahrenheit(30.0)
console.log(`${fahrenheit}°F`)
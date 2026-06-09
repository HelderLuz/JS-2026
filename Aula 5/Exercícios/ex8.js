// 8. Solicite ao usuário que insira uma temperatura em graus Celsius e converta essa temperatura para Fahrenheit usando a fórmula 

let celsius = Number(prompt('Digite a temperatura(ºC): '))
let fahrenheit = 9/5 * celsius + 32

console.log(`${celsius.toFixed(1)}ºC equivale a ${fahrenheit.toFixed(1)}ºF`)

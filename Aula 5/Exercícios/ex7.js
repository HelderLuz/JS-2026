// 7. Solicite uma distância em quilômetros e converta para metros e centímetros.

let quilometros = Number(prompt('Digite a distância em quilômetros'))

let metros = quilometros * 1000
let centimetros = metros * 100

console.log(`${quilometros}km em metros é ${metros}m, e em centímetros é ${centimetros}cm`)
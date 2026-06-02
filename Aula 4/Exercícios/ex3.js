// 3. Com a taxa de câmbio do dólar para o real a R$ 5.25, calcule quantos dólares são equivalentes a R$ 100 e R$ 250.

let cambioDolar = 5.25

console.log(`R$100,00 é igual a $${(100 / cambioDolar).toFixed(2)}`)
console.log(`R$250,00 é igual a $${(250 / cambioDolar).toFixed(2)}`)

console.log('R$100,00 é igual a $' + (100 / cambioDolar).toFixed(2))
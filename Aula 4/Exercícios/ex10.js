// Calcule o valor total de uma compra com 3 produtos:
// Produto 1: R$ 45,00
// Produto 2: R$ 30,00
// Produto 3: R$ 25,00
// Adicione 10% de imposto ao valor total.

let produto1 = 45
let produto2 = 30
let produto3 = 25
let desconto = 10

let valorTotal = (produto1 + produto2 + produto3) * (1 + desconto / 100)
console.log(`Valor total com imposto: R$${valorTotal.toFixed(2)}`)
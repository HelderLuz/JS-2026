// 8. Um produto custa R$ 200, e está com um desconto de 15%. Calcule o valor final do produto com o desconto aplicado.

let produto = 200
let desconto = 15
let valorDesconto = 200 * (15 / 100)
let produtoDescontado = produto - valorDesconto

console.log(`Valor com desconto: R$${produtoDescontado.toFixed(2)}`)
console.log(`Valor com desconto: R$${(produto * 0.85).toFixed(2)}`)
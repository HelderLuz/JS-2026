// 10. Escreva um programa que leia o salário de um funcionário e calcule o valor do imposto de renda a ser pago, considerando:
// - Faixa salarial até R$ 2.000,00: isento
// - R$ 2.000,01 até R$ 3.500,00: 10%
// - Acima de R$ 3.500,00: 20%.

let salario = Number(prompt('Digite o salário: '))

if (salario <= 2000) {
    console.log('Isento de imposto de renda')
} else if (salario <= 3500) {
    console.log('Imposto de renda devido: ', salario * 0.1)
} else {
    console.log('Imposto de renda devido: ', salario * 0.2)
}
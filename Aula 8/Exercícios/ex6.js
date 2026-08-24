// 6. Implementar um programa que, dado um número inteiro n informado pelo usuário, calcule a média dos n primeiros números naturais. Considere que os números naturais começam em 0.

let n = Number(prompt('Digite o número natural'))
let soma = 0

for (let i = 0; i < n; i++) {
    soma += i
    // soma = soma + i
}

console.log('Acumulado: ', soma)
console.log(`Média: ${soma / n}`)
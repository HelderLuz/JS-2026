// 8. Escreva um programa que calcule a média de uma série de números positivos, parando quando o número zero for encontrado. Exiba a média no final.

let soma = 0;
let qtd = 0;

while (true) {
    let numero = Number(prompt('Digite um número: '));

    if (numero > 0) {
        soma += numero
        qtd++
    } else if (numero === 0) {
        break
    }
}

let media = soma / qtd
console.log(`Média: ${media}`)
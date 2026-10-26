// 5. Escreva uma função em JavaScript que calcule a média de um array de números.

function media(numeros) {
    let soma = 0
    for (let numero of numeros) {
        soma += numero
    }
    return soma / numeros.length;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 7]
console.log(`Média: ${media(numeros)}`)
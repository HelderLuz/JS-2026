// 5. Implementar um programa que encontre o menor valor de uma sequência de números informados pelo usuário. O programa deve solicitar, inicialmente, a quantidade de números a serem fornecidos. Em seguida, o usuário deve informar os números um a um (utilize prompt). O programa deve encontrar e exibir o menor valor da sequência.

let qtd = Number(prompt('Quantidade de números da sequência'))
let menor = Number(prompt('[1]: '))
let numero;

for(let i = 2; i <= qtd; i++) {
    numero = Number(prompt(`[${i}]:`))

    if (numero < menor) {
        menor = numero;
    }
}

console.log(`Menor número: ${menor}`)
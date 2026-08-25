// 8. Implementar um programa que calcule a potência de um número utilizando uma estrutura de repetição. O programa deve solicitar ao usuário que informe a base e o expoente, ambos considerados como inteiros.
// 2³ = 2 * 2 * 2 = 8

let base = Number(prompt("Digite a base"))
let expoente = Number(prompt("Digite o expoente"))
let potencia = 1

for (let i = 1; i <= expoente; i++) {
    potencia *= base
}

console.log(`Potência: ${potencia}`)


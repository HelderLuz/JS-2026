// 4. Implementar um programa que imprima a tabuada de um número informado pelo usuário (utilize prompt). O programa deve exibir os resultados das multiplicações desse número por valores de 0 até 10.

let numero = Number(prompt('Digite um número: '))

for (let i = 0; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`)
}
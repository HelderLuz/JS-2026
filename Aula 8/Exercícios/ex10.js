// 10. Crie um programa que gere a sequência de Fibonacci até o n-ésimo termo, onde n é informado pelo usuário.
// É uma sequência de números inteiros, começando por 0 e 1. Os números subsequentes corresponde a soma dos dois números anteriores.
// Ex: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

let n = Number(prompt('Digite o número de termos'))
let atual = 0
let posterior = 1

for (let i = 0; i < n; i++) {
    console.log(atual)
    let aux = posterior
    posterior = posterior + atual
    atual = aux
}
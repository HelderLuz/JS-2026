// 5. Escreva um programa que receba a quantidade de faltas de um aluno e sua nota. Se a nota for maior ou igual a 60 e as faltas forem menores ou iguais a 5, imprima "Aprovado". Caso contrário, imprima "Reprovado".

let faltas = Number(prompt('Digite as faltas'))
let nota = Number(prompt('Digite a nota'))

if (nota >= 60 && faltas <= 5) {
    console.log('Aprovado')
} else {
    console.log('Reprovado!!!')
}
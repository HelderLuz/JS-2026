// 4. Peça a idade do usuário e calcule em quantos anos ele poderá se aposentar, considerando a idade mínima de 65 anos.

let idade = Number(prompt('Digite a idade: '))
let idadeParaAposentar = 65 - idade

console.log(`Falta ${idadeParaAposentar} anos para aposentar`)
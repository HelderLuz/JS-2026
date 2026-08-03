// 11. Considerando idade e renda. Crie uma expressão booleana para verificar se a pessoa pode solicitar um empréstimo, considerando que ela deve ser maior de idade e ter renda de pelo menos R$ 2000,00.

let idade = Number(prompt('Digite a idade: '))
let renda = Number(prompt('Digite a renda: '))

let emprestimoPermitido = (idade >= 18) && renda >= 2000
console.log(`Empréstimo permitido? ${emprestimoPermitido}`)
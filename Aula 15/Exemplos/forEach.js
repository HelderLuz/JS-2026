// const numeros = [1, 2, 3, 4, 5];

// // Usando uma função de seta como callback
// numeros.forEach((numero, indice) => {
//     console.log(`Índice: ${indice}, Valor: ${numero}`);
// });

const pessoas = [
  { nome: 'Ana', idade: 22 },
  { nome: 'Bia', idade: 25 },
  { nome: 'Carlos', idade: 30 },
  { nome: 'Daniel', idade: 35 }
]

pessoas.forEach((pessoa, indice) => {
  console.log(`${indice + 1}. ${pessoa.nome} tem ${pessoa.idade} anos.`)
})


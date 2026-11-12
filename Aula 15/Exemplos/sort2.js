const pessoas = [
  { nome: 'Carlos', idade: 30 },
  { nome: 'Bia', idade: 25 },
  { nome: 'Daniel', idade: 35 },
  { nome: 'Ana', idade: 22 },
]

pessoas.sort((a, b) => b.idade - a.idade)
console.log(pessoas) // Array original ordenado
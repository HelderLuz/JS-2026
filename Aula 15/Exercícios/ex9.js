// 9. Dado o array
const pessoas = [
  { nome: 'Ana', idade: 25 }, 
  { nome: 'Bruno', idade: 30 }, 
  { nome: 'Carla', idade: 22 }
];
// Use map para criar um novo array contendo apenas os nomes das pessoas.

const nomes = pessoas.map(pessoa => pessoa.nome)

console.log(nomes)
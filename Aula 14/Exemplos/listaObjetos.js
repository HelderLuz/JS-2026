const turma = [
  { nome: "Ana", nota: 9, cidade: "Recife" },
  { nome: "Beto", nota: 7, cidade: "Olinda" },
  { nome: "Carla", nota: 10, cidade: "Recife" },
];

// Acessando dados específicos
for (const aluno of turma) {
    aluno.nota *= 10;
    console.log(`O aluno ${aluno.nome} tirou nota ${aluno.nota}.`);
}

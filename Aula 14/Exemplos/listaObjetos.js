const turma = [
  { nome: "Ana", nota: 9, cidade: "Recife" },
  { nome: "Beto", nota: 7, cidade: "Olinda" },
  { nome: "Carla", nota: 10, cidade: "Recife" },
];


turma.push({ nome: 'José', nota: 9, cidade: "Porto Alegre" })

// Acessando dados específicos
for (const aluno of turma) {
    console.log(`O aluno ${aluno.nome} tirou nota ${aluno.nota}.`);
}
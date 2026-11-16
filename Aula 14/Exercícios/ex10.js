function imprimirAluno(aluno) {
  const { nome, idade, disciplinas } = aluno;
  console.log(`\nNome: ${nome}, Idade: ${idade}`);
  console.log('Disciplinas:');
  let media = 0;
  for (const disciplina of disciplinas) {
    const { nome, nota } = disciplina;
    console.log(`${nome} - Nota: ${nota}`);
    media += nota;
  }
  media /= disciplinas.length;
  console.log(`Média de ${nome}: ${media.toFixed(2)}`);
}

const alunos = [
  {
    nome: 'João',
    idade: 20,
    disciplinas: [{ nome: 'Matemática', nota: 10 }, { nome: 'Português', nota: 7 }]
  }
];

alunos.push({
  nome: 'Maria',
  idade: 22,
  disciplinas: [{ nome: 'Matemática', nota: 8 }, { nome: 'Português', nota: 9 }]
});

alunos.push({
  nome: 'Pedro',
  idade: 21,
  disciplinas: [{ nome: 'Matemática', nota: 6 }, { nome: 'Português', nota: 5 }]
}); 

for (const aluno of alunos) {
  imprimirAluno(aluno);
}
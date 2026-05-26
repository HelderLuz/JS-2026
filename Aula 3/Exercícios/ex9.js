// Dado o nome, sobrenome e idade de uma pessoa, usando concatenação de string, combine essas variáveis em uma única frase, que diga "Meu nome é [nome completo] e eu tenho [idade] anos."
let nome = 'José'
let sobrenome = 'Silva'
let idade = 30
// let frase = 'Meu nome é ' + nome + ' ' + sobrenome + ' e eu tenho ' + idade + ' anos.'
let frase = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.` 
console.log(frase)
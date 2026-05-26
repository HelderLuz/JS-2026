// Dada uma variável idade com um número inteiro, crie uma variável idade_str que converta esse número para uma string. Em seguida, crie uma frase que diga "Eu tenho [idade] anos."

let idade = 100
let idade_str = String(idade)
let frase = `Eu tenho ${idade_str} anos`
console.log(frase)
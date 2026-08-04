// 3. Escreva um programa que categorize a idade de uma pessoa da seguinte forma:
// "Criança" se tiver menos de 12 anos
// "Adolescente" se tiver entre 12 e 17 anos
// "Adulto" se tiver entre 18 e 59 anos
// "Idoso" se tiver 60 anos ou mais

let idade = Number(prompt('Digite a idade'))

if (idade < 12) {
    console.log('Criança')
} else if (idade <= 17) {
    console.log('Adolescente')
} else if(idade <= 59) {
    console.log('Adulto')
} else {
    console.log('Idoso')
}
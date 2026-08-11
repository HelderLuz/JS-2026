// 6. Crie um programa que leia um caractere e informe se ele é uma vogal ou uma consoante. (Desconsidere diferença de maiúscula e minúscula)

let letra = prompt('Digite a letra: ')

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    console.log('Vogal')
} else {
    console.log('Consoante')
}
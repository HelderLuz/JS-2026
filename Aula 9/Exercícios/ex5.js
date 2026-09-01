// 5. Escreva um programa que solicita ao usuário adivinhar um número secreto entre 1 e 10. O programa continua pedindo palpites até que o número correto seja adivinhado. Use o while para manter o laço até o palpite estar correto. Ao final, apresente o número de palpites, e parabenise o jogador.

let numeroSecreto = 7
let numeroPalpites = 0

while (true) {
    let palpite = Number(prompt('Digite o palpite (1-10)'))
    numeroPalpites++

    if (palpite === numeroSecreto) {
        console.log('Parabéns!!! Você finalmente acertou!!!')
        console.log(`Número de tentativas: ${numeroPalpites}`)
        break
    }
    
    console.log('Você errou!!!!!!! \nTente novamente!')
}
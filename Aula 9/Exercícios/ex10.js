// 10. Faça um programa que utilize um laço while para exibir um menu de opções ao usuário (ex: 1 - Olá, 2 - Tchau, 3 - Sair). Use switch para tratar cada opção. O programa só termina quando o usuário escolher a opção "3 - Sair".

let opcao = 0

while (opcao != 3) {
    opcao = Number(prompt('Menu \n1. Olá \n2. Tchau \n3. Sair \nDigite a opção:'))
    switch (opcao) {
        case 1:
            console.log('Olá!')
            break;
        case 2:
            console.log('Tchau!')
            break
        case 3:
            console.log('Adeus! \nVolte em breve!')
            break
        default:
            console.log('Opção inválida!')
            break;
    }
}

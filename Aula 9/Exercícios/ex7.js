// 7. Escreva um programa que simula um sistema de login. O usuário tem até 3 tentativas para acertar a senha correta. Se errar 3 vezes, o acesso é negado.

let senhaCorreta = 'swordfish'
let tentativas = 0

while (tentativas < 3) {
    let senha = prompt('Digite a senha')
    tentativas++

    console.log(`Número de tentativas: ${tentativas}`)
    if (senha === senhaCorreta) {
        console.log('Senha correta! \nEntrando no sistema...')
        break
    } else {
        console.log('Senha incorreta!')
    }
}



//  12. Implemente um programa de calculadora simples que, dentro de um laço while, peça ao usuário para escolher uma operação (+, -, *, /) usando switch, leia dois números e mostre o resultado. O programa deve continuar até que o usuário escolha sair.

while (true) {
    let num1 = prompt('Digite o primeiro número ("sair" para terminar)')
    if (num1 == "sair")
        break
    
    let num2 = prompt('Digite o segundo número ("sair" para terminar)')
    if (num2 == "sair")
        break
    
    let operacao = prompt('Digite a operação (+, -, *, /, "sair")')
    if (operacao == "sair")
        break
    
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operacao) {
        case '+':
            console.log(`Soma: ${num1 + num2}`)
            break;
        case '-':
            console.log(`Subtração: ${num1 - num2}`)
            break
        case '*':
            console.log(`Multiplicação: ${num1 * num2}`)
            break
        case '/':
            console.log(`Divisão: ${num1 / num2}`)
        break
        default:
            console.log('Operação inválida! \nTente de novo!')
            break;
    }
}
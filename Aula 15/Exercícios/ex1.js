// 1. Crie uma função executarCallback(callback) que recebe uma função como argumento e a executa. Teste-a passando uma função que imprime "Callback executado!".

function executarCallback(callback) {
    callback()
}

executarCallback(() => { 
    console.log('Callback executado!') 
})
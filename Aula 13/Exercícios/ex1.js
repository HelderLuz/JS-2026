// Implemente um programa que permita ao usuário adicionar elementos em um array até que decida parar. Em seguida, exiba o array resultante e sua quantidade de elementos.

const lista = []

while (true) {
    const elemento = prompt('Digite o valor ("sair" para terminar)')
    if (elemento.toLowerCase() == "sair") {
        break
    }
    lista.push(elemento)
}

console.log('Elementos:', lista)
console.log(`Tamanho da lista: ${lista.length}`)
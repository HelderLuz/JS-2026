// 9. Implemente um programa que some todos os números informados pelo usuário até que seja digitada a palavra “fim”.

let soma = 0

while (true) {
    let valor = prompt('Digite o número ("fim" para terminar) ')

    if (valor === "fim") {
        break
    }

    soma += Number(valor)
}

console.log(`Soma: ${soma}`)
// 2. Dada a seguinte lista de objetos representando carros:
// Realize as seguintes tarefas:
// Adicione um novo carro à lista.
// Exiba os carros fabricados após 2018.
const carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Honda", modelo: "Civic", ano: 2018 },
    { marca: "Ford", modelo: "Focus", ano: 2019 }
]
// const novoCarro = {
//     marca: "BYD", modelo: "Seal", ano: 2026
// }
// carros.push(novoCarro)
carros.push({ marca: "BYD", modelo: "Seal", ano: 2026 })

console.log('Carros fabricados após 2018: ')
for (const carro of carros) {
    const { marca, modelo, ano } = carro
    if (ano > 2018) {
        console.log(marca, modelo, ano)
    }
}
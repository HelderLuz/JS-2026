// 6. Lista de Compras:
// - Crie um array chamado listaDeCompras.
// - Este array deve conter pelo menos 3 objetos, onde cada objeto representa um item da compra e tem as propriedades produto (string), precoUnitario (number) e quantidade (number).

// 7. Total da Compra:
// - Usando um laço (for...of), itere sobre a listaDeCompras.
// - Calcule o custo total da compra (preço * quantidade de cada item) e armazene em uma variável total.
// - Imprima o valor total no console.

const listaDeCompras = [
    { 'produto': 'monitor', 'precoUnitario': 1599.99, 'quantidade': 7 },
    { 'produto': 'gabinete', 'precoUnitario': 499.99, 'quantidade': 12 },
    { 'produto': 'teclado', 'precoUnitario': 199.99, 'quantidade': 35 }
]

function imprimirLista(listaDeCompras) {
    console.log('Lista de compras')
    for (const { produto, precoUnitario, quantidade } of listaDeCompras) {
        console.log(`Produto: ${produto} Preço: R$${precoUnitario} Quantidade: ${quantidade} Preço total: R$${(precoUnitario * quantidade).toFixed(2)}`)
    }
    console.log()
}

function totalCompra(listaDeCompras) {
    let total = 0
    for (const produto of listaDeCompras) {
        total += produto.precoUnitario * produto.quantidade
    }
    return total
}
imprimirLista(listaDeCompras)
console.log(`Total da compra R$ ${totalCompra(listaDeCompras).toFixed(2).replace('.',',')}`)


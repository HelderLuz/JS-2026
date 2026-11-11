// 6. Lista de Compras:
// - Crie um array chamado listaDeCompras.
// - Este array deve conter pelo menos 3 objetos, onde cada objeto representa um item da compra e tem as propriedades produto (string), precoUnitario (number) e quantidade (number).

// 7. Total da Compra:
// - Usando um laço (for...of), itere sobre a listaDeCompras.
// - Calcule o custo total da compra (preço * quantidade de cada item) e armazene em uma variável total.
// - Imprima o valor total no console.

// 8. Encontre o Produto:
// - Crie uma função encontrarProduto(lista, nomeDoProduto).
// - A função deve percorrer a lista e retornar o objeto do produto se encontrá-lo.
// - Se não encontrar, deve retornar null.
// - Teste a função buscando por um produto que existe e um que não existe.

function encontrarProduto(lista, nomeDoProduto) {
    for (const produto of lista) {
        if (nomeDoProduto.toLowerCase() == produto.produto.toLowerCase()) {
            return produto
        }
    }
    return null
}

const listaDeCompras = [
    { 'produto': 'monitor', 'precoUnitario': 1599.99, 'quantidade': 7 },
    { 'produto': 'gabinete', 'precoUnitario': 499.99, 'quantidade': 12 },
    { 'produto': 'teclado', 'precoUnitario': 199.99, 'quantidade': 35 }
]

function moeda(preco) {
    return preco.toFixed(2).replace('.',',')
}

function imprimirLista(listaDeCompras) {
    console.log('Lista de compras')
    for (const { produto, precoUnitario, quantidade } of listaDeCompras) {
        console.log(`Produto: ${produto} Preço: R$${moeda(precoUnitario)} Quantidade: ${quantidade} Preço total: R$${moeda(precoUnitario * quantidade)}`)
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
console.log(`Total da compra R$ ${moeda(totalCompra(listaDeCompras))}`)

// console.log(encontrarProduto(listaDeCompras, 'teclado'))
// console.log(encontrarProduto(listaDeCompras, 'mouse'))

let produto = encontrarProduto(listaDeCompras, 'teclado')
if (produto) {
    console.log(produto)
} else {
    console.log('Produto não encontrado')
}
produto = encontrarProduto(listaDeCompras, 'mouse')
if (produto) {
    console.log(produto)
} else {
    console.log('Produto não encontrado')
}

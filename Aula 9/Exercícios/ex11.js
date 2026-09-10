// 11. Implemente um programa que simule um sistema de caixa de supermercado. O programa deve solicitar a quantidade e o valor unitário de cada produto. Esse processo deve ser repetido até que o usuário informe a palavra “fim”. Após a entrada da palavra “fim”, o programa deve exibir o valor total da compra.

let totalCompra = 0

while (true) {
    let qtd = prompt('Digite a quantidade ("fim" para sair)')

    if (qtd === "fim")
        break
    let valor = prompt('Digite a valor  ("fim" para sair)')

    if (valor === "fim")
        break
    totalCompra += Number(qtd) * Number(valor)
}

console.log(`Valor total da compra: R$ ${totalCompra}`)
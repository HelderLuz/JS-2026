const produtoA = { nome: "Caneta", preco: 2.0 };

const produtoB = produtoA; // produtoB agora é uma REFERÊNCIA para produtoA

console.log(produtoA); // ...e o valor em A também mudou -> 3.0
produtoB.preco = 3.0; // Alteramos em B

console.log(produtoA); // ...e o valor em A também mudou -> 3.0

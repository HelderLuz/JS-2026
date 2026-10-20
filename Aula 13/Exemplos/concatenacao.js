const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const lista3 = lista2.concat(lista1);
console.log(lista3); // [1, 2, 3, 4, 5, 6]

const lista4 = [...lista1, ...lista2];
console.log(lista4); // [1, 2, 3, 4, 5, 6]

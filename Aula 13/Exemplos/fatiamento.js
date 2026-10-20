const lista = [1,2,3,4,5,6,7,8,9,10];
console.log(lista.slice(2,5));   // [3,4,5]
console.log(lista.slice(0,5));   // [1,2,3,4,5]
console.log(lista.slice(5));     // [6,7,8,9,10]
console.log(lista.slice());      // cópia superficial
console.log(lista.slice(0, -1)); // [1..9]

console.log(lista.at(-10))
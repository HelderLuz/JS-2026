const numeros = [10, 4, 25, 18, 7];

const primeiroMaiorQue20 = numeros.find( numero => numero > 20 );

console.log(primeiroMaiorQue20); // 25

const maiorQue30 = numeros.find(n => n > 30);
console.log(maiorQue30); // undefined

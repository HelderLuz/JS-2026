const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, numero) => {
  return acumulador * numero;
}, 1); // 0 é o valor inicial do acumulador

console.log(soma); // 15

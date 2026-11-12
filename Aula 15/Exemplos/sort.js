const numeros = [10, 1, 21, 3];

// Ordenação crescente
numeros.sort((a, b) => b - a );
console.log(numeros); // [1, 3, 10, 21]

const nomes = ['João', 'Maria', 'José', 'João', 'Pedro', 'Ana'];

nomes.sort((a, b) => a.localeCompare(b, 'pt-br')); // Ordena em ordem alfabética
console.log(nomes); // [ 'Ana', 'João', 'João', 'José', 'Maria', 'Pedro' ]

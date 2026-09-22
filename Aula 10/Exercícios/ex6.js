// 6. Escreva uma função chamada compararNumeros que receba dois números e retorne true se eles forem iguais e a diferença entre eles se forem diferentes (n1 - n2).

/**
 * 
 * @param {number} n1  - primeiro número
 * @param {number} n2  - segundo número para comparação
 * @returns {any} retorna true se iguais, ou a diferença entre eles.
 */
function compararNumeros(n1, n2) {
    if (n1 === n2) {
        return true
    }

    return Math.abs(n1 - n2)
}

console.log(compararNumeros(3, 3))
console.log(compararNumeros(1, 3))
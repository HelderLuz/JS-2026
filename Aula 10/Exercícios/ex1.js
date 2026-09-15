// 1. Escreva uma função em JavaScript que calcule a área de um triângulo.

/**
 * 
 * @param {number} base - Comprimento do triângulo.
 * @param {number} altura - Altura do triângulo.
 * @returns {number} Área do triângulo. 
 * 
 * @example
 * // Retorna 6
 * calcularAreaTriangulo(4, 3)
 */
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2
}

console.log(`Área do triângulo: ${calcularAreaTriangulo(4, 3)}`)
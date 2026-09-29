function calcular(a, b, c) {
    let resultado = a + b * c
    if (resultado > 100) {
        console.log("Resultado muito alto")
        return resultado
    } else {
        console.log("Resultado normal")
        return resultado
    }
}
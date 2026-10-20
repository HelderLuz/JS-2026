const idades = [];
for (let i = 0; i < 5; i++) {
    const valor = Number(prompt('Digite uma idade:'));
    if (!Number.isNaN(valor)) {
        idades.push(valor);
    }
}
console.log(idades);

let contador = 0;
let e = 0;
for (e = 1000; e <= 2000; e++) {
    if (e % 3 === 0) {
        contador = contador + 1;
        console.log(e)
    }
}
console.log("Quantidade: ", contador);

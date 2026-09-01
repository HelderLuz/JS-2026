// 4. Crie um programa que imprima os números de 1 a 20, mas interrompa o laço quando o número for 13.

let contador = 1

while (contador <= 20) {
    if (contador === 13) {
        break
    }
    console.log(contador)
    contador++
}
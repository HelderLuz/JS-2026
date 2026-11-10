// 3. Meu Livro Favorito:
// Crie um objeto chamado livro que represente seu livro favorito.
// Ele deve ter as propriedades titulo (string), autor (string), ano (number), paginas (number) e genero (string).
// Imprima no console o título e o autor do livro.

const livro = {
    'titulo': 'Caçando carneiros',
    'autor': 'Haruki Murakami',
    'ano': 2014,
    'paginas': 277,
    'genero': 'Ficção'
}

console.log(`Autor: ${livro.autor}, Título: ${livro.titulo}`)

// 4. Expandindo o Livro:
// Adicione uma nova propriedade ao objeto livro chamada editora (string).
// Altere o número de páginas para um novo valor.
// Imprima o objeto livro completo no console.

livro.editora = 'Alfaguara'
livro.paginas = 336
console.log(livro)

// 5. Descrevendo o Livro:
// Adicione um método chamado descrever ao objeto livro.
// Este método deve imprimir no console uma string formatada como: "O livro [TÍTULO] de [AUTOR] tem [PAGINAS] páginas."
// Chame o método livro.descrever().

livro.descrever = function() {
    console.log(`O livro ${this.titulo} de ${this.autor} tem ${this.paginas} páginas`)
}

livro.descrever()
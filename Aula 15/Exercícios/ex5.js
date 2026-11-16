// 5. Dado o array const palavras = ['gato', 'cachorro', 'elefante', 'pássaro'];, use sort para ordená-lo em ordem alfabética.

const palavras = ['gato', 'cachorro', 'elefante', 'pássaro']

palavras.sort((a, b) => a.localeCompare(b, 'pt-br'))

console.log(palavras)
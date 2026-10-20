const nomes = ['João', 'Maria', 'José'];
console.log(nomes)
nomes.push('Ana'); // adiciona no final
console.log(nomes)
const nome = nomes.pop()
console.log(`Elemento removido: ${nome}`)
console.log(nomes)
let indice = nomes.indexOf('João')
console.log(indice)
nomes.splice(indice, 1)
indice = nomes.indexOf('Maria')
nomes.splice(indice, 1)
console.log(`Lista sem o João: ${nomes}`)
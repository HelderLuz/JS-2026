const carro = {
  marca: "Ford",
  modelo: "Ka",
  ano: 2020,
};

carro.peso = 890

for (const chave in carro) {
  // 'chave' é uma string: "marca", "modelo", "ano"
  console.log(`${chave}: ${carro[chave]}`);
}

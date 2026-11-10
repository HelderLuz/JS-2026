const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2001,
  
  ligar() { // Um método do objeto 'carro'
    console.log("O " + this.marca + " " + this.modelo + " está ligando... vrum vrum!");
  },
};

carro.ligar(); // Executando o método
console.log(carro.marca, carro.ano, carro["modelo"])

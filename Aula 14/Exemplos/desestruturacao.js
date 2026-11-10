const usuario = {
  nome: "Pedro",
  idade: 42,
  cidade: "Curitiba",
};

const { nome, idade, cidade } = usuario;

function imprimir(user) {
    const { nome, idade, cidade } = user
    console.log(nome, idade, cidade)
}

imprimir(usuario)

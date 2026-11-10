const postDoBlog = {
  titulo: "5 Dicas de JavaScript para Iniciantes",
  autor: "Maria Clara",
  visualizacoes: 1500,
  tags: ["#javascript", "#frontend", "#dicas", "#programacao"],
};

// Acessando uma tag específica
// console.log(`A primeira tag do post é ${postDoBlog.tags[0]}.`);
// console.log(`A segunda tag do post é ${postDoBlog['tags'][1]}.`);

console.log('Lista de tags:')
for (const tag of postDoBlog.tags) {
    console.log(tag)
}
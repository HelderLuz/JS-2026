let fruta = prompt("Escolha uma fruta: maçã ou banana");

switch (fruta) {
    case "maca":
    case "maçã":
        console.log("Você escolheu maçã.");
        break;
    case "banana":
        console.log("Você escolheu banana.");
        break;
    default:
        console.log("Fruta não reconhecida.");
}

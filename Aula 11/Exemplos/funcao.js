function exemplo() {
    var funcVar = "Var de função";
    let funcLet = "Let de função";
    const funcConst = "Const de função";
    console.log(funcVar, funcLet, funcConst); // Funciona aqui
}
exemplo()
console.log(funcConst); 
// Erro: funcVar, funcLet, funcConst não estão definidas

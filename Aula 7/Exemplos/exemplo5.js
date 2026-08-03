let nota = 59

if (nota >= 60) { // Primeiro nível
  console.log("Aprovado")
  
  if (nota >= 90) { // Segundo nível
    console.log("Excelente!")
  }  
  else if (nota >= 75) { // Segundo nível
    console.log("Bom desempenho.")
  }  
  else { // Segundo nível
    console.log("Pode melhorar.")
  } 
}  
else { // Primeiro nível
  console.log("Reprovado")
} 

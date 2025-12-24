let transacoes = [
  { usuario: "Lucas", tipo: "entrada", valor: 300 },
  { usuario: "Marina", tipo: "saida", valor: 120 },
  { usuario: "Lucas", tipo: "entrada", valor: 200 },
  { usuario: "Paulo", tipo: "entrada", valor: 150 },
  { usuario: "Lucas", tipo: "saida", valor: 100 }
]

let calculo = 0 

for(let i = 0; i < transacoes.length; i++){
  if(transacoes[i].usuario === "Lucas"){
    if(transacoes[i].tipo === "entrada"){
      calculo += transacoes[i].valor
    }else{
      calculo -= transacoes[i].valor
    }
  }
}

console.log(calculo)
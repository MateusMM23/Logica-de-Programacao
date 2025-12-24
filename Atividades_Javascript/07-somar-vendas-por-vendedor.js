let vendas = [
  { vendedor: "Ana", valor: 500 },
  { vendedor: "Bruno", valor: 300 },
  { vendedor: "Ana", valor: 200 },
  { vendedor: "Carla", valor: 400 }
]

let total = 0

for(let i = 0; i < vendas.length; i++){
  if(vendas[i].vendedor === "Ana"){
    total+= vendas[i].valor
  }
}

console.log(total)
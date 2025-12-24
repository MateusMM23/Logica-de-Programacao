let vendas = [
  { vendedor: "Ana", valor: 500 },
  { vendedor: "Bruno", valor: 300 },
  { vendedor: "Ana", valor: 200 },
  { vendedor: "Carla", valor: 400 },
  { vendedor: "Ana", valor: 100 }
]

let contador = 0

for(let i = 0; i < vendas.length; i++){
  if(vendas[i].vendedor === "Ana"){
    contador+= vendas[i].valor
  }
}

console.log(contador)
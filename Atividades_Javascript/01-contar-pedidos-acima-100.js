let pedidos = [
  { cliente: "Ana", total: 120 },
  { cliente: "Bruno", total: 80 },
  { cliente: "Carla", total: 200 },
  { cliente: "Diego", total: 50 }
]

let contador = 0
for(let i = 0; i < pedidos.length; i++){
  if(pedidos[i].total > 100){
    contador++
  }
}

console.log(contador)
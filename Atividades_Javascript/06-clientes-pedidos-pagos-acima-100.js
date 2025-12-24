
let pedidos = [
  { cliente: "Ana", valor: 120, pago: true },
  { cliente: "Bruno", valor: 90, pago: false },
  { cliente: "Carla", valor: 200, pago: true },
  { cliente: "Diego", valor: 150, pago: true }
]

let nomes = []

for(let i = 0; i < pedidos.length; i++){
  if(pedidos[i].pago === true && pedidos[i].valor > 100){
    nomes.push(pedidos[i].cliente)
  }
}
console.log(nomes)
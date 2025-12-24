
let pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 21 },
  { nome: "Carla", idade: 18 },
  { nome: "Diego", idade: 15 }
]

let contador = 0

for(let i = 0; i < pessoas.length; i++){
  if(pessoas[i].nome.idade > 18){
      contador++
  }
}

console.log(contador)
let funcionarios = [
  { nome: "Lucas", salario: 2500 },
  { nome: "Marina", salario: 4000 },
  { nome: "Paulo", salario: 1800 },
  { nome: "Fernanda", salario: 3200 }
]

let nomes = []

for(let i = 0; i < funcionarios.length; i++){
  if(funcionarios[i].salario >= 3000){
    nomes.push(funcionarios[i].nome)
  }
}

console.log(nomes)
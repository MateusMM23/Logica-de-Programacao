let funcionarios = [
  { nome: "Lucas", salario: 2500, ativo: true },
  { nome: "Marina", salario: 4000, ativo: true },
  { nome: "Paulo", salario: 3500, ativo: false },
  { nome: "Fernanda", salario: 3200, ativo: true }
]

let nomes = []

for(let i = 0; i < funcionarios.length; i++){
  if(funcionarios[i].salario >= 3000 && funcionarios[i].ativo === true){
    nomes.push(funcionarios[i].nome)
  }
}

console.log(nomes)

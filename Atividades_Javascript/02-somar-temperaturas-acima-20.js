let temperaturas = [18, 22, 30, 15, 27, 10]
let contador = 0

for(let i = 0; i < temperaturas.length; i++){
  if(temperaturas[i] > 20){
    contador+= temperaturas[i]
  }
}

console.log(contador)

let pesos = [1000, 2000, 1500]

function ex6(pesos){
  pesos = pesos.sort((a,b)=>a-b)
  let media = pesos.reduce((total, item)=>total+=item, 0)/pesos.length
  let leve = pesos[0]
  let pesado = pesos[pesos.length-1]
  console.log(`Média: ${media}, mais pesado: ${pesado}, mais leve: ${leve}`)
}

ex6(pesos)
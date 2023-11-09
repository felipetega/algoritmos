let n = 9
let matricula = '2971392221022'
let vMatricula = matricula.split("")

function ex5(n){
  let res = vMatricula.reduce((total, item, index) => item == n ? total += `${index}, ` : total += '', '');
  console.log(res.slice(0, -2));
}

ex5(2);

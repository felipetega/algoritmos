let v1 = [22, 33, 11, 15]
let v2 = [10, 5, 6, 10]

function ex4(v1, v2){
  let v3 = []
  for(let i = 0; i<v1.length; i++){
    v3[i] = v1[i]+v2[i]
  }
  console.log(v3)
}

ex4(v1,v2)
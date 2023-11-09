let arr = [2,4,5,6,3,1,8,7,9,10]
let n = 3

function ex2(n){
  let res = []
  for(let i = 0; i<arr.length; i++){
    res.push(arr[i]*n)
  }
  console.table(res)
}

ex2(n)

function ex7(n) {
  let fib_sequence = [0, 1];
  while (fib_sequence.length <= n) {
      fib_sequence.push(fib_sequence[fib_sequence.length - 1] + fib_sequence[fib_sequence.length - 2]);
  }
  return fib_sequence;
}

const n = 30;
const fib_sequence = ex7(n);
fib_sequence.forEach(termo => console.log(termo));

// Função para gerar a sequência de Fibonacci até o número informado
function fibonacciSequence(input) {
  if (input < 0) {
    return [];
  }

  const sequence = [];
  let a = 0;
  let b = 1;

  while (a <= input) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  return sequence;
}

const numbers = [21, 32, 34];

// loop para percorrer o vetor com numeros, criar a sequencia de fibonacci
// atraves da funcao e depois verificar se o numero pertence a sequencia
numbers.forEach((num, index) => {
  const generatedFibonacciSequence = fibonacciSequence(num);
  if (generatedFibonacciSequence.includes(num)) {
    console.log(
      `O número ${num} pertence a sequência de fibonacci ${generatedFibonacciSequence}`
    );
  } else {
    console.log(
      `O número ${num} não pertence a sequência de fibonacci ${generatedFibonacciSequence}`
    );
  }
});

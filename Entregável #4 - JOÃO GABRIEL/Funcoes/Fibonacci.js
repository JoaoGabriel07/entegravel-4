function Fibonacci(n) {
  var sequence = [0, 1]; // Inicializa a sequência com os dois primeiros termos
  
  // Calcula os termos subsequentes
  for (var i = 2; i < n; i++) {
    var nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }
  
  return sequence;
}

// Exemplo de uso:
var n = 10; // Número de termos desejados
var result = Fibonacci(n);
console.log(result); // Exibe a sequência de Fibonacci com 10 termos no console

module.exports = Fibonacci;
function Contagem(N, dataset) {
  let count = 0;

  for (let i = 0; i < dataset.length; i++) {
    if (Number.isInteger(dataset[i]) && dataset[i] >= 1 && dataset[i] <= N) {
      count++;
    }
  }

  return count;
}

// Exemplo de uso:
const dataset = [1, 3, 7, 4, 2, 9, 6];
const N = 10;
const result = Contagem(N, dataset);
console.log(result); // Saída: 7

module.exports = Contagem;
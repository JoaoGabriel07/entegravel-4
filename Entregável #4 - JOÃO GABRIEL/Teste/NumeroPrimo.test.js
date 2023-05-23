const NumeroPrimo = require('../Funcoes/NumeroPrimo');

test('verifica se um número primo é identificado corretamente', () => {
  const n = 7;
  const result = NumeroPrimo(n);
  expect(result).toBe(true);
});

test('verifica se um número não primo é identificado corretamente', () => {
  const n = 10;
  const result = NumeroPrimo(n);
  expect(result).toBe(false);
});

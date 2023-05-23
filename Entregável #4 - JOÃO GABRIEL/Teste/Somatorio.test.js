const somatorio = require('../Funcoes/Somatorio');

test('calcula corretamente o somatório de um array de números', () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = 15;
  const result = somatorio(numbers);
  expect(result).toBe(expected);
});

test('calcula corretamente o somatório de um array com números maiores', () => {
  const numbers = [10, 20, 30];
  const expected = 60;
  const result = somatorio(numbers);
  expect(result).toBe(expected);
});

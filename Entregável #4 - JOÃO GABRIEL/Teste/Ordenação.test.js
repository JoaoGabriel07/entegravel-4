const Ordenação = require('../Funcoes/Ordenação');

test('ordena corretamente um array não ordenado', () => {
  const unsortedArr = [5, 3, 7, 1, 8, 2, 9, 4];
  const expected = [1, 2, 3, 4, 5, 7, 8, 9];
  const result = Ordenação(unsortedArr);
  expect(result).toEqual(expected);
});

test('ordena corretamente um array com elementos repetidos', () => {
  const unsortedArr = [10, 5, 2, 5, 8, 2, 10];
  const expected = [2, 2, 5, 5, 8, 10, 10];
  const result = Ordenação(unsortedArr);
  expect(result).toEqual(expected);
});

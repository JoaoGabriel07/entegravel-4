const Contagem = require('../Funcoes/Contagem');

test('conta corretamente os valores inteiros no intervalo', () => {
    const dataset = [1, 3, 7, 4, 2, 9, 6];
    const N = 10;
    const result = Contagem(N, dataset);
    expect(result).toBe(7);
  });
  
  test('retorna 0 se não houver valores inteiros no intervalo', () => {
    const dataset = [1.5, 2.5, 3.5, 4.5];
    const N = 5;
    const result = Contagem(N, dataset);
    expect(result).toBe(0);
  });

  const Fibonacci = require('../Funcoes/Fibonacci');

  test('os 10 primeiros números da contagem de fibonacci devem ser os corretos', () => {
    expect(Fibonacci(10)).toMatchObject([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
  
  test('os 2 primeiros números da contagem de fibonacci devem ser 0 e 1', () => {
    expect(Fibonacci(2)).toMatchObject([0, 1]);
  });

  const Mdc = require('../Funcoes/Mdc');

test('calcula corretamente o MDC de dois números', () => {
    const a = 12;
    const b = 18;
    const result = Mdc(a, b);
    expect(result).toBe(6);
  });
  
  test('calcula corretamente o MDC de dois números diferentes', () => {
    const a = 35;
    const b = 14;
    const result = Mdc(a, b);
    expect(result).toBe(7);
  });


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

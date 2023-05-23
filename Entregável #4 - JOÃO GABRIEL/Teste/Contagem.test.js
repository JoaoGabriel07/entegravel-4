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
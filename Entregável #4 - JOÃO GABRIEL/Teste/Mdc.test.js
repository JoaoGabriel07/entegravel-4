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


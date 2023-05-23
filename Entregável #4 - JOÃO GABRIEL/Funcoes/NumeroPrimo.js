function NumeroPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  console.log(NumeroPrimo(7)); // true
  console.log(NumeroPrimo(10)); // false

module.exports = NumeroPrimo;
function Mdc(a, b) {
    if (b === 0) {
      return a;
    }
    return Mdc(b, a % b);
  }
  
  console.log(Mdc(12, 18)); // 6
  console.log(Mdc(35, 14)); // 7

  module.exports = Mdc;
function Somatorio(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  
  console.log(Somatorio([1, 2, 3, 4, 5])); // 15
  console.log(Somatorio([10, 20, 30])); // 60

  module.exports = Somatorio;
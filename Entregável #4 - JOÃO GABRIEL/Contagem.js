function countNumbersInRange(n, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 1 && arr[i] <= n) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countNumbersInRange(5, [1, 3, 7, 4, 2])); // 3
  console.log(countNumbersInRange(10, [5, 12, 15, 1, 9])); // 4
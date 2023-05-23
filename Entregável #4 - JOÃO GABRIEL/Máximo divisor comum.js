function mdc(a, b) {
    if (b === 0) {
      return a;
    }
    return mdc(b, a % b);
  }
  
  console.log(mdc(12, 18)); // 6
  console.log(mdc(35, 14)); // 7
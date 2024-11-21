function sum(x = 0) {
    const integer = [x];
    function calculator(y) {
      if (y === undefined) {
        return integer.reduce((acc, curr) => acc + curr, 0);
      } else {
        integer.push(y);
        return calculator;
      }
    }
    
    return calculator;
  }
console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(3)(7)());
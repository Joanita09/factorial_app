function calculateFactorial(n) {
    if (n < 2) {
      // return n * calculateFactorial(n - 1);
      return 1;
    } if (n >= 2) {
      return n * calculateFactorial(n - 1);
    } if (typeof (n) !== 'number') {
      return 'undefined';
    } if (n < 0) {
      throw new Error('Undefined');
    }
  }
  
  module.exports = calculateFactorial;
  
const { assert } = require('chai');
  const getNthFibonacci = require('../fibonacci_example2');
  
  describe('Fibonacci Sequence', () => {
    describe('Valid Fibonacci number', () => {
      it('Should return 0 for the Fibonacci Number equals 0', () => {
        assert.equal(getNthFibonacci(0), 0);
      });
  
      it('Should return 1 for the Fibonacci number equal 1', () => {
        assert.equal(getNthFibonacci(1), 1);
      });
      it('should return 1 for the 2nd Fibonacci number', () => {
        assert.equal(getNthFibonacci(2), 1);
      });
      it('should return 2 for the 3rd Fibonacci number', () => {
        assert.equal(getNthFibonacci(3), 2);
      });
      it('should return 5 for the 5th Fibonacci number', () => {
        assert.equal(getNthFibonacci(5), 5);
      });
      it('should return 34 when Fibonacci number equals 9', () => {
        assert.equal(getNthFibonacci(9), 34);
      });
    });
    describe('Invalid Fibonacci number', () => {
      // Validating Fib numbers that are negative
      it('should throw error for negative Fibonacci numbers', () => {
        assert.throws(() => getNthFibonacci(-45), 'n cannot be negative');
      });
    });
  });
const assert = require ('chai').assert;
const getNthfibonacci = require('../fibonacci_example1');


describe('Test for Fibonacci', function(){
    it('1st Position on the Fibonacci returns 0', function(){
        let nthFibonacci = getNthfibonacci(1);
        assert.equal(nthFibonacci, 0);
    });
    });




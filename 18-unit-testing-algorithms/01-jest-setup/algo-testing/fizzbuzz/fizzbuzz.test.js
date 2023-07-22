const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzbuzz).toEqual('function');
    });
    it('should return the number if not divisible by 3 or 5', () => {
        expect(fizzbuzz(1)).toEqual(1);
        expect(fizzbuzz(13)).toEqual(13);
        expect(fizzbuzz(17)).toEqual(17);
    });
    it('should return Fizz if divisible by 3', () => {
        expect(fizzbuzz(3)).toEqual('Fizz');
        expect(fizzbuzz(18)).toEqual('Fizz');
        expect(fizzbuzz(81)).toEqual('Fizz');
    });
    it('should return Fizz if divisible by 3', () => {
        expect(fizzbuzz(5)).toEqual('Buzz');
        expect(fizzbuzz(25)).toEqual('Buzz');
        expect(fizzbuzz(55)).toEqual('Buzz');
    });
    it('should return FizzBuzz if divisible by 3 & 5', () => {
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
        expect(fizzbuzz(45)).toEqual('FizzBuzz');
        expect(fizzbuzz(60)).toEqual('FizzBuzz');
    });
});
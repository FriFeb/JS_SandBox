const palindrome = require('./palindrome');

describe('Palindrome', () => {
    it('should be a function', () => {
        expect(typeof palindrome).toEqual('function');
    });
    it('should return a boolean', () => {
        expect(typeof palindrome('hello')).toEqual('boolean');
    });
    it('should return true if argument is a palindrome', () => {
        expect(palindrome('wow')).toBeTruthy();
        expect(palindrome('tenet')).toBeTruthy();
        expect(palindrome('rotator')).toBeTruthy();
    });
    it('should return false if argument is not a palindrome', () => {
        expect(palindrome('hello')).toBeFalsy();
        expect(palindrome('bye')).toBeFalsy();
        expect(palindrome('world')).toBeFalsy();
    });
    it('should return false if argument includes spaces', () => {
        expect(palindrome(' wow')).toBeFalsy();
        expect(palindrome('wow ')).toBeFalsy();
    });
});
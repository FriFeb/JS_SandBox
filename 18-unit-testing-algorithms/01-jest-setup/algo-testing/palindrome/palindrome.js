function palindrome(str) {

    // Method 1
    // let left = '', right = '';
    // for (let i = 0; i < Math.round(str.length / 2); i++) {
    //     left += str[i];
    //     right += str[str.length - 1 - i];
    // }
    // return left === right;

    // Method 2
    // const reversed = str.split('').reverse().join('');
    // return reversed === str;

    // Method 3
    return str.split('').every((char, index) => {
        return char === str[str.length - 1 - index];
    })
}

module.exports = palindrome;
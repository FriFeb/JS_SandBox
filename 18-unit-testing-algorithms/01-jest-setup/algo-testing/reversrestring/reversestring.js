function reverseString(str) {

    // Method 1 
    // return str.split('').reverse().join('');

    // Method 2 
    // let reversedString = '';
    // for (const char of str) {
    //     reversedString = char + reversedString;
    // }

    // Method 3 
    let reversedString = '';
    for (let i = 0; i < str.length; i++) {
        reversedString += str[str.length - 1 - i];
    }
    
    return reversedString;
}

module.exports = reverseString;
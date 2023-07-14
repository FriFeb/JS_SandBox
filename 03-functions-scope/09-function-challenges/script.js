// Challange 1
function getCelsius(f) {
    return (f - 32) * 5 / 9;
}

console.log(`The temperature is ${getCelsius(32)} \xB0C`);
console.log(`The temperature is ${getCelsius(132)} \xB0C`);


// Challange 2
function minMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
    }
}

console.log(minMax([1, 2, 3, 4, 5]));


// Challange 3
(function (l, w) {
    console.log(`The area of a rectangle with a length of 
    ${l} and a width of ${w} is ${l * w}.`)
    }
)(10,20);
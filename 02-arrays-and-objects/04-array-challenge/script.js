// Challenge 1
const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// 1
// arr1.pop();
// const arr3 = [].concat(arr1, arr2);

// 2
// const arr3 = [arr1.slice(0, arr1.length - 1), arr2].flat();

// 3
const arr3 = [...arr1.slice(0, arr1.length - 1), ...arr2];

console.log(arr3);
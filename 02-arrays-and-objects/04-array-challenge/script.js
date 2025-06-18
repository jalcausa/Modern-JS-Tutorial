// Challenge 1

const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);

// console.log(arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

/* First way */
/*

const arr3 = arr1.slice(0,4).concat(arr2);

*/

/* Second way */
/*
const arr3 = arr1.concat(arr2);

arr3.splice(4, 1);
*/

/* Third way */

const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);

console.log(arr3);
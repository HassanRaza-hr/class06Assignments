"use strict";
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones.
var ArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= ArrayOfNumbers.length; i++) {
    var odd = ArrayOfNumbers[i];
    if (odd % 2 == 0) {
        ArrayOfNumbers.splice(i, 1);
    }
}
console.log(ArrayOfNumbers);
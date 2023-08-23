"use strict";
// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
/*for(let n=10;n>0 && n%2==0;n--){
    var sum:number=n+n;
    console.log(sum)
}*/ // failed
// attempt #2
var num = 19;
let result = 0;
for (let n = 0; n <= num; n++) {
    if (n % 2 == 0) {
        result += n;
    }
}
console.log(result); // here is the problem that i cannot tell the number of even numbers but i can tell number in range which add all even number til the input number
let digit = 5;
var result1 = 0;
for (let n1 = 0; n1 <= digit * 2; n1++) {
    if (n1 % 2 == 0) {
        result1 += n1;
    }
    else { }
}
console.log(result1);

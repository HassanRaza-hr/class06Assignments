"use strict";
//write a program which is used to remove negative numbers from the array
var tNUm = [1, 2, 3, -4, -43, -23, 12, -34];
for (let v = 0; v < tNUm.length; v++) {
    if (tNUm[v] < 0) {
        tNUm.splice(v, 1);
    }
}
console.log(tNUm);

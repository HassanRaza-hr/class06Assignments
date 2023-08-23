// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
/*for(let n=10;n>0 && n%2==0;n--){
    var sum:number=n+n;
    console.log(sum)
}*/                                   // failed
// attempt #2
var num=20;
let result=0
for(let n=0;n<=num ;n++){
    if(n%2==0){
     result+=n
    }
   
}
console.log(result)

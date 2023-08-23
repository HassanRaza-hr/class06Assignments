//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
/*
var evenNumbers:number[]=[];

function findingEven(givenNumbers:number[]){
    for(let i=0;i<givenNumbers.length && i%2==0;i++){
        givenNumbers[i]=evenNumbers[i];
console.log(evenNumbers[i])
    }

}
findingEven([1,2,3,4,5,6,7,8,9,10])                                // FAILED
*/

// Attempt # 2;
var even:number[]=[];
function evenNum(inputNumber:number[]){
    var index=0;
    for(index=0;index<inputNumber[index];index++){
        if(inputNumber[index]%2==0){
        
    even[index]=inputNumber[index]
        }
    
    }
    console.log(even)
}
evenNum([1,2,3,4,5,6])
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
/*
var even:number=0;
function evenNum(inputNumber:number[]){
    var index=0;
    for(index=0;index<inputNumber[index];index++){
        if(inputNumber[index]%2==0){
        
    even=inputNumber[index]
        }
    
    }
    console.log(even)
}
evenNum([1,2,3,4,5,6])  
*/                                              // successful but issues
   // Attempt #3
   /*
   var even1:number[]=[];
var ind=0
var delet=0
   function evenresult(providingNumbers:number[]){
    for(let ind=0;ind<providingNumbers.length;ind++,delet++){
    
        if(providingNumbers[ind]%2==0 && delet%2==0){
        
            providingNumbers.splice(ind,delet)
            console.log(providingNumbers[ind])
            even1[ind]=providingNumbers[ind]
        
        }

    }
   }
   console.log()
   evenresult([1,2,3,4,5,6])
   */
   //attempt no 4;
const array:number[]=[1,2,3,4,5,6,7,8,9]

    for(var i=0;i<array.length;i++){
    var remaining:any=array[i]
if(remaining%2!=0){

    array.splice(i,1)
    
 
}
    }
console.log(array);
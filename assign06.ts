//Write a program that uses a function to find the largest element in an array of numbers.
function findingLargestDigit(digit:number[]){
    var largest=digit[0]
    for(let g=0;g<digit.length;g++){
        if(digit[g]>largest){
            largest=digit[g]
        }
    }
    return largest
}
var numberss=[12,34,56,78,90,100]
var largestNum=findingLargestDigit(numberss)
console.log(largestNum)                                    ;//parctice attmept pass



// Method #2;                   finding smallest number
function num1(listOfNum:number[]){
    var bigNum=listOfNum[0]
for(let s=0;s<listOfNum.length;s++){
    if(listOfNum[s]<bigNum){
    bigNum=listOfNum[s]
    }
    
}
return bigNum;
}
var greatest= [1,3,4,5,6,7,8,9,1000]
var resu=num1(greatest)
console.log(resu)
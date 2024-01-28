// print odd no in Array annonymous function
let inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
let outputArray =[];
let oddArray = function(element){
    for(let x in element){
       if(element[x]%2 !=0){
           outputArray.push(element[x])
       
       }
    }
}

oddArray(inputArray)
console.log(outputArray)


//print odd no in Array IIFE
let inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,11];
let outputArray =[];
( function(){
    for(let x in inputArray){
       if(inputArray[x]%2 !=0){
           outputArray.push(inputArray[x])
       
       }
    }
})(inputArray);
console.log(outputArray)
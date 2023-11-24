// print odd no in Array annonymous function
var inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
var outputArray =[];
var oddArray = function(element){
    for(var x in element){
       if(element[x]%2 !=0){
           outputArray.push(element[x])
       
       }
    }
}

oddArray(inputArray)
console.log(outputArray)


//print odd no in Array IIFE
var inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
var outputArray =[];
( function(){
    for(var x in inputArray){
       if(inputArray[x]%2 !=0){
           outputArray.push(inputArray[x])
       
       }
    }
})(inputArray);
console.log(outputArray)
//Convert all the strings to title caps in a string array annonymous 

var inputArray =["some","one","two"];
var outputArray =[];
var stringArray =function(inputArray){
    for(var x in inputArray){
      outputArray.push(inputArray[x][0].toUpperCase()+inputArray[x].slice(1))
    }
}

stringArray(inputArray)
console.log(outputArray)


//Convert all the strings to title caps in a string array IIFE
var inputArray =["some","one","two"];
var outputArray =[];
(function(){
    for(var x in inputArray){
      outputArray.push(inputArray[x][0].toUpperCase()+inputArray[x].slice(1));
    }
})(inputArray);
console.log(outputArray);
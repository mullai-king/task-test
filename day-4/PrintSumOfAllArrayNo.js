//Sum of all numbers in an array annonymous function
var inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
var output =0;
var sumOfArray = function(element){
    for(var x in element){
      output +=element[x];
    }
    return output;
};

console.log(sumOfArray(inputArray));



//Sum of all numbers in an array IIFE
var inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
var output =0;
(function(element){
    for(var x in element){
       output +=element[x];
    }
    console.log(output);
})(inputArray);
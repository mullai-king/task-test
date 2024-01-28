//Sum of all numbers in an array annonymous function
let inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
let output =0;
let sumOfArray = function(element){
    for(let x in element){
      output +=element[x];
    }
    return output;
};

console.log(sumOfArray(inputArray));



//Sum of all numbers in an array IIFE
let inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
let output =0;
(function(element){
    for(let x in element){
       output +=element[x];
    }
    return output;
})(inputArray);
console.log(output);
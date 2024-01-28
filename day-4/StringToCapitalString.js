//Convert all the strings to title caps in a string array annonymous 

let inputArray =["some","one","two"];
let outputArray =[];
let stringArray =function(inputArray){
    for(let x in inputArray){
      outputArray.push(inputArray[x][0].toUpperCase()+inputArray[x].slice(1))
    }
}

stringArray(inputArray)
console.log(outputArray)


//Convert all the strings to title caps in a string array IIFE
let inputArray =["some","one","two"];
let outputArray =[];
(function(){
    for(let x in inputArray){
      outputArray.push(inputArray[x][0].toUpperCase()+inputArray[x].slice(1));
    }
})(inputArray);
console.log(outputArray);
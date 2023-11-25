var inputArray =["some","one","two"];
var outputArray =[];
var stringArray =(inputArray)=>{
    for(var x in inputArray){
      outputArray.push(inputArray[x][0].toUpperCase()+inputArray[x].slice(1))
    }
}

stringArray(inputArray)
console.log(outputArray)
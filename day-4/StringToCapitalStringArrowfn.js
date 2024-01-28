let inputArray =["some","one","two"];
let outputArray =[];
let stringArray =(inputArray)=>{
    for(let x in inputArray){
      outputArray.push(inputArray[x][0].toUpperCase()+inputArray[x].slice(1))
    }
}

stringArray(inputArray)
console.log(outputArray)
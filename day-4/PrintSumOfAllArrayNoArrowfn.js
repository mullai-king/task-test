let inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
let output =0;
let sumOfArray =(element)=>{
    for(let x in element){
      output +=element[x];
    }
    return output;
};

console.log(sumOfArray(inputArray));
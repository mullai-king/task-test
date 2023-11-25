var inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
var output =0;
var sumOfArray =(element)=>{
    for(var x in element){
      output +=element[x];
    }
    return output;
};

console.log(sumOfArray(inputArray));
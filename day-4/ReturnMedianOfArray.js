// //Return median of two sorted arrays of the same size.
let array1 =[1,2,4,3];
let array2 =[7,9,5,6];
let sortedArray =(array1).concat(array2).sort();
let medianValue =((sortedArray.length)/2)-1;
let medianResult = 0;
let median = function(input1,input2){
    for(i=medianValue;i<=medianValue+1;i++){
        medianResult += sortedArray[i]
    }
    return (medianResult)
};
let medianOutput =median(array1,array2)
console.log(medianOutput)




//Return median of two sorted arrays of the same size.
let array1 =[1,2,4,3];
let array2 =[7,9,5,6];
let sortedArray =(array1).concat(array2).sort();
let medianValue =((sortedArray.length)/2)-1;
let medianResult = 0;
let median = function(input1,input2){
    for(i=medianValue;i<=medianValue+1;i++){
        medianResult += sortedArray[i]
    }
    return (medianResult)
}(array1,array2);

console.log(median)
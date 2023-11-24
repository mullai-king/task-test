// //Return median of two sorted arrays of the same size.
var array1 =[1,2,4,3];
var array2 =[7,9,5,6];
var sortedArray =(array1).concat(array2).sort();
var medianValue =((sortedArray.length)/2)-1;
var medianResult = 0;
var median = function(input1,input2){
    for(i=medianValue;i<=medianValue+1;i++){
        medianResult += sortedArray[i]
    }
    return (medianResult)
};
var medianOutput =median(array1,array2)
console.log(medianOutput)




//Return median of two sorted arrays of the same size.
var array1 =[1,2,4,3];
var array2 =[7,9,5,6];
var sortedArray =(array1).concat(array2).sort();
var medianValue =((sortedArray.length)/2)-1;
var medianResult = 0;
var median = function(input1,input2){
    for(i=medianValue;i<=medianValue+1;i++){
        medianResult += sortedArray[i]
    }
    return (medianResult)
}(array1,array2);

console.log(median)
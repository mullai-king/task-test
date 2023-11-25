// Rotate an array by k times 
var array1 =[1,2,4,3];
var k = 4;
var rotateArray = function(input){
    for(var i =0;i<k;i++){
        array1.push(array1[i])
    }
    array1.splice(0,k)
}
rotateArray(array1)
console.log(array1)


// Rotate an array by k times 

var array1 =[1,2,4,3];
var k = 2;
(function(input){
    for(var i =0;i<k;i++){
        array1.push(array1[i])
    }
    array1.splice(0,k)
}(array1));
console.log(array1)
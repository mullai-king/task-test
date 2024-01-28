// Rotate an array by k times 
let array1 =[1,2,4,3];
let k = 4;
let rotateArray = function(input){
    for(let i =0;i<k;i++){
        array1.push(array1[i])
    }
    array1.splice(0,k)
}
rotateArray(array1)
console.log(array1)


// Rotate an array by k times 

let array1 =[1,2,4,3];
let k = 2;
(function(input){
    for(let i =0;i<k;i++){
        array1.push(array1[i])
    }
    array1.splice(0,k)
}(array1));
console.log(array1)
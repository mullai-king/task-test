// Remove duplicates from an array
let inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
let outputArray =[];
let removeDuplicate = function(element){
    for(let x=0;x<element.length;x++){
        for(y=x+1;y<=element.length;y++){
                if(element[x] == element[y]){
                    inputArray.splice(y);
                }
        }
    }
}
removeDuplicate(inputArray)
console.log(inputArray)




// Remove duplicates from an array in IIFE
let inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
let outputArray =[];
(function(element){
    for(let x=0;x<element.length;x++){
        for(y=x+1;y<=element.length;y++){
                if(element[x] == element[y]){
                    inputArray.splice(y)
                   
                }
        }
    }
})(inputArray)
console.log(inputArray)
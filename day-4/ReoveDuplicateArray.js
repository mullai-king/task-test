// Remove duplicates from an array
var inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
var outputArray =[];
var removeDuplicate = function(element){
    for(var x=0;x<element.length;x++){
        for(y=x+1;y<=element.length;y++){
                if(element[x] == element[y]){
                    inputArray.splice(y)
                    // console.log(element[x],element[y])
                }
            //   console.log(element[y])  
        }
        // console.log(element[x])
    }

}
removeDuplicate(inputArray)
console.log(inputArray)




// Remove duplicates from an array in IIFE
var inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
var outputArray =[];
(function(element){
    for(var x=0;x<element.length;x++){
        for(y=x+1;y<=element.length;y++){
                if(element[x] == element[y]){
                    inputArray.splice(y)
                    // console.log(element[x],element[y])
                }
            //   console.log(element[y])  
        }
        // console.log(element[x])
    }

})(inputArray)
console.log(inputArray)
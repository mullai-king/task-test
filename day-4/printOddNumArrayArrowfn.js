let inputArray =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
let outputArray =[];
let oddArray = (element)=>{
    for(let x in element){
       if(element[x]%2 !=0){
           outputArray.push(element[x])
       
       }
    }
}

oddArray(inputArray)
console.log(outputArray)
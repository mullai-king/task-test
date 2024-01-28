let inputArray = ["amma","appa","me","sister"]
let outputArray =[];
let palindromefunction =(input) =>{
        for (let i in input){
          reverseInput = input[i].split('').reverse().join("")
          if(input[i] ===reverseInput){
                outputArray.push(input[i])
            }
        }
        return outputArray
    }
let palindromResult = palindromefunction(inputArray)
 console.log(palindromResult)
var inputArray = ["amma","appa","me","sister"]
var outputArray =[];
var palindromefunction =(input) =>{
        for (var i in input){
          reverseInput = input[i].split('').reverse().join("")
          if(input[i] ===reverseInput){
                outputArray.push(input[i])
            }
        }
        return outputArray
    }
var palindromResult = palindromefunction(inputArray)
 console.log(palindromResult)
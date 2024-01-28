// Return all the palindromes in an array

let inputArray = ["amma","appa","me","sister"]
let outputArray =[];
let palindromefunction =function(input) {
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
 
 // Return all the palindromes in an array IIFE
 
let inputArray = ["amma","appa","me","sister"]
let outputArray =[];
let palindromefunction =(function(input) {
        for (let i in input){
          reverseInput = input[i].split('').reverse().join("")
          if(input[i] ===reverseInput){
                outputArray.push(input[i])
            }
        }
        return outputArray
    })(inputArray)
 console.log(palindromefunction)
 
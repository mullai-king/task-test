// Return all the palindromes in an array

let inputArray = ["amma","appa","me","sister"]
var outputArray =[];
var palindromefunction =function(input) {
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
 
 // Return all the palindromes in an array IIFE
 
let inputArray = ["amma","appa","me","sister"]
var outputArray =[];
var palindromefunction =(function(input) {
        for (var i in input){
          reverseInput = input[i].split('').reverse().join("")
          if(input[i] ===reverseInput){
                outputArray.push(input[i])
            }
        }
        return outputArray
    })(inputArray)
 console.log(palindromefunction)
 
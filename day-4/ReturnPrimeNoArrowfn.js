var input =100;
var outputArray =[];
var primefunction =(input) =>{
    for (var i =0;i<=input;i++){
        if(i>1){
            var count =0;
            for(j=2;j<=i;j++){
                if(i%j ==0){
                    count++
                 }
            }
        }
        if(count==1){
             outputArray.push(i)
        }
  }
  return outputArray
}
var primeRetult = primefunction(input)
 console.log(primeRetult)
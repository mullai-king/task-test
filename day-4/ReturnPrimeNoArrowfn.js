let input =100;
let outputArray =[];
let primefunction =(input) =>{
    for (let i =0;i<=input;i++){
        if(i>1){
            let count =0;
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
let primeRetult = primefunction(input)
 console.log(primeRetult)
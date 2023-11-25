fetch('https://restcountries.com/v3.1/all').then((res) =>res.json()).then((msg) => countryFlag(msg))
function countryFlag(msg){
console.log("usig for loop print all country flag")
 for(var x =0;msg.length>x;x++){
  console.log(msg[x].flag)
 } 
}
fetch('https://restcountries.com/v3.1/all').then((res) =>res.json()).then((msg) => countryCommonName(msg))
function countryCommonName(msg){
console.log("usig forin loop print all asian country official name")
 for(var x in msg){
 if(msg[x].region == "Asia")
    console.log(msg[x].name.official)
 }
} 
fetch('https://restcountries.com/v3.1/all').then((res) =>res.json()).then((msg) => countrypapulation(msg))
function countrypapulation(msg){
console.log("usig for of loop print  population morethan 1 billion")
 for(var x of msg){
 if(x.population>1000000000)
    console.log(x.name.official)
 }
}
fetch('https://restcountries.com/v3.1/all').then((res) =>res.json()).then((msg) => nameCapitalFlag(msg))
function nameCapitalFlag(msg){
console.log("usig forEach loop print all country name,capital,flag")
 msg.forEach((x)  => {
 console.log("country: "+x.name.official+", capital :"+x.capital +", flag:"+x.flag)
 })
}
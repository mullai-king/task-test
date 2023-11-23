fetch('https://restcountries.com/v3.1/all').then((res) =>res.json()).then((msg) => countryFlag(msg))
function countryFlag(msg){
 for(var x =0;msg.length>x;x++){
  console.log("country is "+msg[x].name.common+", Region is "+msg[x].region+", Sub Region is "+msg[x].subregion+", Papulation is "+msg[x].population)
 } 
}
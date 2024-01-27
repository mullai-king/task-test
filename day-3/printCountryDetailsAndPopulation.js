// fetch('https://restcountries.com/v3.1/all').then((res) =>res.json()).then((msg) => countryFlag(msg))
// function countryFlag(msg){
//  for(var x =0;msg.length>x;x++){
//   console.log("country is "+msg[x].name.common+", Region is "+msg[x].region+", Sub Region is "+msg[x].subregion+", Papulation is "+msg[x].population)
//  } 
// }

const xhr =new XMLHttpRequest();
const URL ="https://restcountries.com/v3.1/all"

xhr.open("GET",URL);
xhr.send();
xhr.onload =() =>{
  let msg =JSON.parse(xhr.response)
  for(let x=0;msg.length >x;x++){
    console.log("Name: "+msg[x].name.common+" Region: "+msg[x].region +" Subregion: "+msg[x].subregion+" Population: "+msg[x].population)
  }
}
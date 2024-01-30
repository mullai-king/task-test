//storing variables 
const xmlReq = new XMLHttpRequest();
const URL = 'https://restcountries.com/v3.1/all';
//strat fetching from api address
xmlReq.open("GET",URL)
xmlReq.send();
xmlReq.onload = ()=>{
   let apiRes =JSON.parse(xmlReq.response)
   printAllCountryFlag(apiRes);
   printAllAsianCountries(apiRes);
   populationBillionCountry(apiRes);
}

//Written funcion print all country flag using "for normal loop"
function printAllCountryFlag(apiRes){
   for(let x=0;apiRes.length>0;x++){
      //here just printing output CL. if it require we can store [arr] and return the [arr].
      console.log(apiRes[x].flag)
   }
   
}

//Written function all asian countries using "for of loop" and anonymous function 
let printAllAsianCountries =(apiRes) =>{
   for(let value of apiRes){
      if(value.continents.includes("Asia")){
         console.log(value.name.common)
      }
   }
}

//written function to get morethan 1Billion population "use for in loop"
function populationBillionCountry(apiRes){
   for(let ind in apiRes){
      if(apiRes[ind].population > 1000000000){
         console.log(apiRes[ind].name.common)
      }
   }
}

//written function to print all country name ande currency name and currency symbol
let printAllCountriesNameAndCurrency = (apiRes) =>{
   apiRes.forEach(element => {
   	let [currencycode] = Object.keys(element.currencies);
      let [currency,currencySymbol]= Object.values(element.currencies[currencycode]);
      
      console.log(element.name.common + "Currency Name "+ currency+"Currency Symbol " +currencySymbol)
   });
}

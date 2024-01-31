//storing variables 
//strat fetching from api address
// const xmlReq = new XMLHttpRequest();
// xmlReq.open("GET",URL)
// xmlReq.send();
// let response = xmlReq.onload = ()=>{
//    var apiRes =JSON.parse(xmlReq.response)
// }


const URL = 'https://restcountries.com/v3.1/all';
   let apiInfo;
   const fetchReq =fetch(URL).then(res=>res.json()).then((result )=>{
   apiInfo = result;
   callfn(apiInfo)
});
function callfn(apiRes){
  
   printAllAsianCountries(apiRes);
   populationBillionCountry(apiRes);
   printAllCountriesNameAndCurrency(apiRes);
   printAllCountryFlag(apiRes);
}


//Written funcion print all country flag using "for normal loop"
function printAllCountryFlag(apiRes){
   console.log("This is all countries flags:")
   for(let x=0;apiRes.length>0;x++){
      //here just printing output CL. if it require we can store [arr] and return the [arr].
      let countryCode = "flag"
      console.log(apiRes[x][countryCode])
   }
   
}

//Written function all asian countries using "for of loop" and anonymous function 
let printAllAsianCountries =(apiRes) =>{
   console.log("All asian countries:")
   for(let value of apiRes){
      if(value.continents.includes("Asia")){
         console.log(value.name.common)
      }
   }
}

//written function to get morethan 1Billion population "use for in loop"
function populationBillionCountry(apiRes){
   console.log("more than 1Billion population countries")
   for(let ind in apiRes){
      if(apiRes[ind].population > 1000000000){
         console.log(apiRes[ind].name.common)
      }
   }
}

//written function to print all country name ande currency name and currency symbol
let printAllCountriesNameAndCurrency = (apiRes) =>{
   console.log("This is all countries name and currencies and symbol")
   count =1;
   apiRes.forEach(element => {
      let [currencycode] = Object.keys(element.currencies);
      let [currency,currencySymbol]= Object.values(element.currencies[currencycode]);
      if(currencycode=="null"||"undefined"){
         console.log(element.name.common,currencycode,currency,currencySymbol)
      }
      console.log(element.name.common + "Currency Name "+ currency+"Currency Symbol " +currencySymbol)
   });
}

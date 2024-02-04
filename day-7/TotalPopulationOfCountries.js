let httpRequest = new XMLHttpRequest();
 httpRequest.open("GET","https://restcountries.com/v3.1/all");
 httpRequest.addEventListener('load',function(){
  let countryPopulation =iteration(JSON.parse(this.response))
   console.log("Total population of countries "+ countryPopulation)
 })

 httpRequest.send()
 
function iteration(data){
  return data.reduce((population,totalPopulation)=>{
    return totalPopulation.population+population
  },0)
}
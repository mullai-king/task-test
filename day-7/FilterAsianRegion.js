const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://restcountries.com/v3.1/all");
httpRequest.addEventListener('load', function () {
 console.log(iteration(JSON.parse(this.response)));
})
httpRequest.send()

function iteration(data) {
  let filteredRes= data.filter((data) => data.region == "Asia" || (data.continents == "Asia" || data.continents.includes("Asia")))
  let mappedData = filteredRes.map((data)=>data.name.common);
  return mappedData;
}
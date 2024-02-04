let httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://restcountries.com/v3.1/all");
httpRequest.addEventListener('load', function () {
  iteration(JSON.parse(this.response))
})
httpRequest.send()

function iteration(data) {

 let resData = data.filter((data) => data.population < 200000)
 let result = resData.map((data) => data.name.common)
 console.log(result)
}
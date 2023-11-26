var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://restcountries.com/v3.1/all");
httpRequest.addEventListener('load', function () {
  iteration(JSON.parse(this.response))
})
httpRequest.send()

function iteration(data) {
  console.log("usig forEach loop print all country name,capital,flag")
  data.forEach((x) => {
    console.log("country: " + x.name.official + ", capital :" + x.capital + ", flag:" + x.flag)
  })
}
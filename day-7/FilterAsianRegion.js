var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://restcountries.com/v3.1/all");
httpRequest.addEventListener('load', function () {
  iteration(JSON.parse(this.response))
})
httpRequest.send()

function iteration(data) {

  data.filter((data) => {
    if (data.region == "Asia" || (data.continents == "Asia" || data.continents.includes("Asia"))) {
      console.log(data.name.common)

    }
  })

}
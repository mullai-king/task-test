var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://restcountries.com/v3.1/all");
httpRequest.addEventListener('load', function () {
  iteration(JSON.parse(this.response))
})
httpRequest.send()

function iteration(data) {

  data.filter((data) => {
    if (data.population < 200000) {
      console.log(data.name.common)

    }
  })

}
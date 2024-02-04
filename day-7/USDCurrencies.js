let httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://restcountries.com/v3.1/all");
httpRequest.addEventListener('load', function () {
  let usdCurrencies = iteration(JSON.parse(this.response));
  console.log("Countries with USD as their currency:");
  usdCurrencies.forEach(country => {
    console.log(country.name.common);
  });
});

httpRequest.send();

function iteration(data) {
  return data.filter(country => {
    return country.currencies && country.currencies.USD;
  });
}
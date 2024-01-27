// fetch('https://restcountries.com/v3.1/all').then((res) =>res.json()).then((msg) => countryFlag(msg))

const xhr = new XMLHttpRequest();
URL = "https://restcountries.com/v3.1/all";
xhr.open("GET",URL);
xhr.send();
xhr.onload = ()=>{
    let msg = JSON.parse(xhr.response);
    for(let x =0;msg.length>x;x++){
     
      console.log(msg[x].flag+" And countries names =>"+msg[x].name.common)
 
    }
  }
 
let paragraph = document.querySelector('.paragraph')
let container = document.querySelector('.container');
let country = document.querySelector('.country');
let search = document.querySelector('.search-box');
let weatherbox = document.querySelector('.weather-box');
let weatherDetails = document.querySelector('.weather-details');
let day =document.querySelector('.day')
let dayy =document.querySelector('.dayy')
let degree = document.querySelector('.degree')
let degre = document.querySelector('.degre')
let date1 = document.querySelector('.date1') 
let date2 = document.querySelector('.date2')
let sun = document.querySelector('.sun')
let sun2 = document.querySelector('.sun2')
let icon = document.querySelector('.icon')
let data = []
function getdata(x) {
    

let HTTP = new XMLHttpRequest();
    HTTP.open(
      "GET",`https://api.weatherapi.com/v1/forecast.json?key=4e7f4b93553e48a98eb233214241306&q=${x}&days=7`);
    HTTP.send();
    HTTP.addEventListener("readystatechange", function () {
      if (HTTP.readyState == 4) {
        data = JSON.parse(HTTP.response);
        paragraph.innerHTML = data.current.temp_c
        country.innerHTML = data.location.name
        day.innerHTML = data.forecast.forecastday[0].day.maxtemp_c
        dayy.innerHTML = data.forecast.forecastday[0].day.mintemp_c
        degre.innerHTML = data.forecast.forecastday[1].day.maxtemp_c
        degree.innerHTML = data.forecast.forecastday[1].day.mintemp_c
            // date1.innerHTML = data.forecast.forecastday[0].date
        // date2.innerHTML = data.forecast.forecastday[1].date
        sun.innerHTML = data.forecast.forecastday[1].day.condition.text
        sun2.innerHTML = data.forecast.forecastday[0].day.condition.text
        // icon.innerHTML = data.forecast.forecastday[0].day.condition.icon
        console.log(data);

      }})
      
    }

    search.addEventListener('input' , function(e){
        let x = e.target.value 
        getdata(x)
    } )
    


// search.addEventListener('click', () => {
//     var APIKey = '7c64f6dcf2e44920aaf163915240607';
//     var city = document.querySelector('.search-box button').value;


//     if (city == '')

//         return;

//     let api = `https://api.weatherapi.com/v1/search.json?key=7c64f6dcf2e44920aaf163915240607&q=lond`
//     let data = this.FetchData(api)

//  async FetchData(api) {
//         let data = await fetch(api)
//         let jsonData = await data.json()
//         console.log(data);
//     }

// })


// ============================================ //
// var weather = []

// async function getweather(){

// var res = await fetch(`https://api.weatherapi.com/v1/search.json?key=7c64f6dcf2e44920aaf163915240607&q=lond`)
//     var data = await res.json()
// .then(function (res){ return res.json() })
// .then(function(data){})
// weather = data.recipes
// console.log(weather);

// }

// getweather()
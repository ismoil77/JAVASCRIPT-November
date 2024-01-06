import { getSearch } from "./api.js";

let infoAll = document.querySelector('.infoAll')
let temperature = document.querySelector('.temperature');
let weatherLike = document.querySelector('.weatherLike');
let cityOrigin = document.querySelector('.cityOrigin');
let dayOfWeek = document.querySelector('.dayOfWeek');
let timeOfDay = document.querySelector('.timeOfDay');
let iconPogoda = document.querySelector('.iconPogoda');
let search = document.querySelector('.search')
let percenOfCity = document.querySelector('.percenOfCity');
let percenOfCity1 = document.querySelector('.percenOfCity1');
let speed = document.querySelector('.speed');
search.oninput=()=> {
    // console.log(search.value);
   
    getSearch(search.value)
}
timeOfDay.innerHTML = new Date().toDateString()
// dayOfWeek.innerHTML = new Date().toDateString().slice(0,3)+"day"


export function getData(data) {
    console.log(data);

    // let container = document.createElement('div');
    // let p = document.createElement('p')
    // p.innerHTML = data.name
    // container.appendChild(p)
    // temperature.append(container)
    cityOrigin.innerHTML = data.name + "," + data.sys.country
    temperature.innerHTML = Math.round(data.main.temp) - 273 + " °"
  
    if (Math.round(data.main.temp) - 273 >= 20) {
        infoAll.style.backgroundImage = "url('/img/650ac1770d39c5.57972791.jpg')"

    }
   else if (Math.round(data.main.temp) - 273 >= 0) {
        infoAll.style.backgroundImage = "url('./img/weather-effects-composition_23-2149853295.avif')"

    }
    else if (Math.round(data.main.temp) - 273 < 0) {
        infoAll.style.backgroundImage = "url('/img/1694592550_sneg_v_rayonax-e1673245803508-1144x600.jpg')"

    }
    let desc = data.weather[0]['description'].split(" ")
    weatherLike.innerHTML = desc[1]
    percenOfCity.textContent = Math.round(data.wind.deg/10 )+ "%"
    // data.wind.gust
    percenOfCity1.textContent = Math.round(data.main.humidity)+ "%"
    speed.textContent = Math.round(data.wind.speed) + " km/h"
    iconPogoda.src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`


    console.log(data.weather[0]['icon']);

   
}
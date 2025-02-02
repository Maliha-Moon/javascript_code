
const apiKeys = "";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const cityName = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

async function checkWeather(city) {
    let fetchAPI = await fetch(apiURL + city + `&appid=${apiKeys}`);
    let data = await fetchAPI.json();
     console.log(data);
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchInput.value); 
});

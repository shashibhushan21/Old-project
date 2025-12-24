const cityInput = document.getElementById('city_input');
const searchBtn = document.getElementById('searchBtn');
const locationcBtn = document.getElementById('locationBtn');
// IMPORTANT: Storing API keys directly in client-side code is insecure and should be avoided in production.
// For personal projects, it's okay, but for a real application, this key should be protected on a server.
const api_key =  '468601ad7e1dd2d7e2f8cf8c9eaef719';
const currentWeatherCard =  document.querySelectorAll('.weather-left .card')[0];
const fiveDaysForecastCard =  document.querySelector('.day-forecast');
const aqiCard = document.querySelectorAll('.highlights .card')[0];
const sunriseCard = document.querySelectorAll('.highlights .card')[1];
const HumidityVal = document.getElementById('HumidityVal');
const VisibilityVal = document.getElementById('VisibilityVal');
const pressureVal = document.getElementById('pressureVal');
const windSpeedVal = document.getElementById('windSpeedVal');
const feelsVal = document.getElementById('feelsVal');
const hourlyForecastCard = document.querySelector('.hourly-forecast');


const aqiList = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const Months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function getWeatherDetails(name, lat, lon, state,country){
    let FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`;
    let WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
    // let WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    let AIR_POLLUTION_API_URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;

    fetch(AIR_POLLUTION_API_URL).then(res => res.json()).then(data =>{
        // console.log(data);
        let {co, no,  no2, o3, so2, pm2_5, pm10, nh3} = data.list[0].components;
        aqiCard.innerHTML = `
        <div class="card-head">
                <p>Air Quality Index</p>
                <p class="air-index aqi-${data.list[0].main.aqi}">${aqiList[data.list[0].main.aqi - 1]}</p>   
            </div>
    
            <div class="air-indices">
            <i class="fa-solid fa-wind"></i>
                <div class="item">
                    <p>PM.5</p>
                    <h2>${pm2_5}</h2>
                        </div>
                <div class="item">
                    <p>PM10</p>
                        <h2>${pm10}</h2>
                    </div>
                <div class="item">
                    <p>S02</p>
                        <h2>${so2}</h2>
                    </div>
                    <div class="item">
                        <p>CO</p>
                        <h2>${co}</h2>
                    </div>
                    <div class="item">
                        <p>NO</p>
                        <h2>${no}</h2>
                    </div>
                    <div class="item">
                        <p>NO2</p>
                        <h2>${no2}</h2>
                    </div>
                <div class="item">
                    <p>NH3</p>
                    <h2>${nh3}</h2>
                    </div>
                <div class="item">
                    <p>O3</p>
                    <h2>${o3}</h2>
                    </div>
            </div>
        `;
    }).catch(() =>{
        alert('Failed to fetch Air Quality Index.');
    
    });


    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        let date = new Date();
        currentWeatherCard.innerHTML  = ` 
             <div class="current-weather">
                    <div class="details">
                    <p>Now</p>
                    <h2>${(data.main.temp - 273.15).toFixed(2)}&deg;C</h2>
                    <p>${data.weather[0].description}</p>
                </div>
                <div class="weather-icon">
                     <img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                </div>
            </div>
            <hr>
            <div class="card-footer">
                <p><i class="fa-regular fa-calendar-days"></i> ${days[date.getDay()]}, ${date.getDate()},
                ${Months[date.getMonth()]}, ${date.getFullYear()}</p>
               <p><i class="fa-solid fa-location-dot"></i> ${ name}, ${state} ,${country}</p>
            </div>`;
    
        let {sunrise, sunset} = data.sys,
            {timezone, visibility} = data,
            {humidity,  pressure, feels_like} =  data.main,
            {speed}  = data.wind,

            sRiseTime = moment.utc(sunrise, 'X').add(timezone, 'second').format('hh:mm A'),
            sSetTime = moment.utc(sunset, 'X').add(timezone, 'second').format('hh:mm A');
        
        sunriseCard.innerHTML = `
         <div class="card-head">
             <p>Sunrise & Sunset</p>
         </div>
         <div class="sunrise-sunset">
             <div class="item">
                 <div class="icon">
                     <img height="70px" src="https://cdn-icons-png.flaticon.com/128/3222/3222792.png">
                 </div>
                 <div>
                     <p>Sunrise</p>
                     <h2>${sRiseTime}</h2>
                 </div>
             </div>
             <div class="item">
                 <div class="icon">
                     <img height="70px" src="https://cdn-icons-png.flaticon.com/128/10132/10132764.png">
                 </div>
                 <div>
                     <p>Sunset</p>
                     <h2>${sSetTime}</h2>
                 </div>
             </div>
         </div>
     `;

     HumidityVal.innerHTML = `${humidity} %`,
     pressureVal.innerHTML = `${pressure} hPa`,
     VisibilityVal.innerHTML = `${visibility / 1000} km`,
     windSpeedVal.innerHTML = `${speed} m/s`,
     feelsVal.innerHTML = `${(feels_like - 273.15).toFixed(2)} &deg;C`;

    }).catch(() => {
        alert('Failed to fetch current weather data.');
    });

    fetch(FORECAST_API_URL).then(res => res.json()).then(data => {
        let hourlyForecast = data.list;
        hourlyForecastCard.innerHTML =  '';
        for(let i = 0; i <= 7; i++){
            let hrForecastDate = new Date(hourlyForecast[i].dt_txt);
            let hr = hrForecastDate.getHours();
            let a = 'PM';
            if(hr < 12) a = 'AM';
            if(hr == 0) hr = '12';
            if(hr > 12) hr = hr - 12;
            hourlyForecastCard.innerHTML += `
                 <div class="card">
                   <p>${hr} ${a}</p>
                     <img src = "https://openweathermap.org/img/wn/${hourlyForecast[i].weather[0].icon}.png" alt="">
                    <p>${(hourlyForecast[i].main.temp - 273.15).toFixed(2)}&deg;C</p>
                </div>
            `;

        }


        let uniqueForecastDays =  [];
        let fiveDaysForecast = data.list.filter(forecast => {
            let forecastDate = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecastDays.includes(forecastDate)) {
                return uniqueForecastDays.push(forecastDate);
            }
        });
        // console.log(fiveDaysForecast);
        fiveDaysForecastCard.innerHTML = '';
        for(let i = 1; i < fiveDaysForecast.length; i++){
            let date  = new Date(fiveDaysForecast[i].dt_txt);
            fiveDaysForecastCard.innerHTML += `
                        
            <div class="forecast-item">
                    <div class="icon-wrapper">
                        <img src="https://openweathermap.org/img/wn/${fiveDaysForecast[i].weather[0].icon}.png">
                        <span>${(fiveDaysForecast[i].main.temp - 273.15).toFixed(2)}&deg;C</span>
                    </div>
                    <p>${date.getDate()}  ${Months[date.getMonth()]}</p>

                    <p> ${days[date.getDay()]}</p>
                </div>

            `;
        }

    }).catch(() => {
        alert('Failed to fetch weather forecast.');
    })

}

function getCityCoordinates(){
    const cityName = cityInput.value.trim();
    if(!cityName) return; // Exit if city name is empty

    const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${api_key}`;
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if (!data.length) {
            return alert(`No coordinates found for ${cityName}. Please enter a valid city name.`);
        }
        const {name, lat, lon, country,  state} = data[0];
        getWeatherDetails(name, lat, lon, state, country);
        cityInput.value = ''; // Clear input on success
    }).catch(() =>{
        alert("An error occurred while fetching the coordinates.");
    })
}


function getUserCoordinates() {  
    navigator.geolocation.getCurrentPosition(
        position => { // Success callback
            const {latitude, longitude} = position.coords;
            const REVERSE_GEOCODING_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${api_key}`;
            
            fetch(REVERSE_GEOCODING_URL)
                .then(res => res.json())
                .then(data => {
                    if (!data.length) {
                        return alert("Could not find city for your location.");
                    }
                    const { name, country, state } = data[0];
                    getWeatherDetails(name, latitude, longitude, state, country);
                })
                .catch(() => {
                    alert("Failed to fetch city name from your coordinates.");
                });
        },
        error => { // Error callback
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation permission denied. Please allow location access or search for a city manually.");
            } else {
                alert("Geolocation request error. Please try again or search for a city manually.");
            }
        }
    );
}

searchBtn.addEventListener('click', getCityCoordinates);
locationcBtn.addEventListener('click', getUserCoordinates);

cityInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        getCityCoordinates();
    }
});

// Load weather for a default city on page load
window.addEventListener('load', () => getWeatherDetails("London", 51.5074, -0.1278, "England", "GB"));

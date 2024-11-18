const apiKey = "cfd8ea48edd18bfb6ad871396519ff27";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.invalidMsg').style.display = 'block'
    } else {
        var data = await response.json();
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').textContent = data.main.humidity + "%";
        document.querySelector('.wind').textContent = data.wind.speed + " km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = './assets/images/clouds.png';
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = './assets/images/clear.png';
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = './assets/images/rain.png';
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = './assets/images/drizzle.png';
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = './assets/images/mist.png';
        }


        let weatherElement = document.querySelector('.weather');
        weatherElement.style.display = 'block';
        weatherElement.style.animation = 'slideDown 0.5s ease-in-out';
        document.querySelector('.invalidMsg').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
        checkWeather(searchBox.value);
});


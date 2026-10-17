let apiKey = "886cd992865cf92ae9788a109c372d5e";

async function getCoordinates(longLaturl, apiKey) {
    let response = await fetch(longLaturl);
    let data = await response.json(); 
    console.log('city', data);

    if(data.cod === "404") {
        alertify.error('City not found. Please enter a valid city name');
        // alert("City not found. Please enter a valid city name.");
        return;
    }else{
        let lat = data.coord.lat;
        let lon = data.coord.lon; 
        let tempurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        getTemp(tempurl);
    }     
    
 }

 async function getTemp(tempurl) {
    const response = await fetch(tempurl);
    const data = await response.json();
    document.getElementById("city").textContent = data.name;
    document.getElementById("temp").textContent = Math.round(data.main.temp - 273.15) + "°C";
    document.getElementById("humidity").textContent = data.main.humidity + "%";
    document.getElementById("wind-speed").textContent = data.wind.speed + " km/h";
    let weatherImg = document.querySelector(".weather-icon"); 
    if(data.weather[0].main === "Thunderstorm ") {
        weatherImg.src = "./assets/clouds.png";
    }
    else if(data.weather[0].main === "Drizzle") {
        weatherImg.src = "./assets/drizzle.png";
    }
    else if(data.weather[0].main === "Rain") {
        weatherImg.src = "./assets/rain.png";
    }
    else if(data.weather[0].main === "Snow") {
        weatherImg.src = "./assets/snow.png";
    }
    else if(data.weather[0].main === "Mist") {
        weatherImg.src = "./assets/mist.png";
    }
    else if(data.weather[0].main === "Smoke") {
        weatherImg.src = "./assets/wind.png";
    }
    else if(data.weather[0].main === "Haze") {
        weatherImg.src = "./assets/clouds.png";
    }
    else if(data.weather[0].main === "Dust") {
        weatherImg.src = "./assets/wind.png";
    }
    else if(data.weather[0].main === "Fog") {
        weatherImg.src = "./assets/mist.png";
    }
    else if(data.weather[0].main === "Sand") {
        weatherImg.src = "./assets/snow.png";
    }
    else if(data.weather[0].main === "Ash") {
        weatherImg.src = "./assets/clear.png";
    }
    else if(data.weather[0].main === "Squall") {
        weatherImg.src = "./assets/clear.png";
    }
    else if(data.weather[0].main === "Tornado") {
        weatherImg.src = "./assets/rain.png";
    }

    let weatherInfo = document.querySelector(".weather");
    weatherInfo.style.display = "block";
 }

let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function() {
 let city = document.getElementById("city-input").value;

  let longLaturl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

 getCoordinates(longLaturl, apiKey);
});
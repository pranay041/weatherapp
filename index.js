// API key to access the OpenWeatherMap API
const apiKey = "427074607ba2e069f738fe666c57f2d5";

// Selects the weather icon element that will display the weather condition image
const weatherIcon = document.querySelector(".weather-icon");

// Selects the video element that will play in the background
const backgroundVideo = document.querySelector(".background-video");

// Selects the source element within the video tag to change the video source dynamically
const source = document.getElementById("background-video");

// Asynchronous function to fetch and display weather data for a given city
async function checkWeather(city) {
    // Constructs the API URL with the city name and API key, specifying units in metric (Celsius)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;
    
    // Fetches the weather data from the API
    const response = await fetch(apiUrl);
    
    // Converts the response data to JSON format
    const data = await response.json();

    // Logs the data to the console for debugging purposes
    console.log(data);

    // Checks if the API response indicates the city was not found (error code 404)
    if (data.cod === "404") {
        // Displays the error message if the city is not found
        document.querySelector(".error").style.display = "block";
        return;
    } else {
        // Updates the city name in the DOM
        document.querySelector(".city").innerHTML = data.name;
        // Updates the temperature in the DOM, rounding the value and appending "°c"
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        // Updates the humidity percentage in the DOM
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        // Updates the wind speed in the DOM, appending "Km/h"
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        // Conditional logic to change the weather icon and background video based on the weather condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png";
            source.src = "./videos/clouds.mp4";
        } 
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "./images/clear.png";
            source.src = "./videos/Haze.mp4";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png";
            source.src = "./videos/Rain.mp4";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";
            source.src = "./videos/Drizzle.mp4";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png";
            source.src = "./videos/Mist.mp4";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
            source.src = "./videos/Clear.mp4";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./images/snow.png";
            source.src = "./videos/Snow.mp4";
        }
        else if (data.weather[0].main == "wind") {
            weatherIcon.src = "./images/wind.png";
            source.src = "./videos/wind.mp4";
        }
    }
}

// Adds an event listener to the search button that triggers the weather check when clicked
document.getElementById("search-button").addEventListener("click", () => {
    // Retrieves the value entered in the city input field
    const city = document.getElementById("city-input").value;
    
    // Checks if a city name was entered
    if (city) {
        // If a city name was entered, call the checkWeather function
        checkWeather(city);
    } else {
        // If no city name was entered, display an alert asking for input
        alert("Please enter a city name.");
    }
});

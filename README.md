
##Weather App
Welcome to the Weather App! This simple web application allows users to check the current weather for any city around the world. The app provides information about temperature, humidity, and wind speed, along with appropriate background videos and icons that change based on the weather conditions.

##Features
Search Weather by City: Enter the name of any city to get real-time weather information.

Dynamic Weather Display: The app displays weather icons and background videos that correspond to the current weather conditions (e.g., rain, snow, clear).

##Responsive Design: The app is designed to work well on both desktop and mobile devices.

##How to Use

Check out the live demo: [weattherApp demo](https://pranay041.github.io/weatherapp/)

Open the Website:

Launch the Weather App in your preferred web browser by opening the index.html file.

Search for a City:

In the search bar, type the name of the city you want to check the weather for.
Click on the search button (magnifying glass icon) to fetch the weather data.

View Weather Information:

The app will display the current temperature, humidity, and wind speed for the city.
If the city is not found, an error message saying "Invalid City Name" will be displayed.

Experience Dynamic Backgrounds:

Based on the weather in the selected city, the background video and weather icon will change accordingly (e.g., rain, clouds, clear sky).

##Troubleshooting
No City Entered: If you attempt to search without entering a city name, an alert will prompt you to enter a city name.
Invalid City Name: If the city name you entered is invalid or not recognized, an error message will appear. Make sure the city name is spelled correctly.
Installation and Setup

Clone the Repository:

bash
Copy code
git clone https://github.com/pranay041/weatherapp.git

Open the Project:

Navigate to the project directory.
Open index.html in your web browser.

Ensure Internet Connection:

The app fetches weather data from the OpenWeatherMap API, so an active internet connection is required.

### How to Get Your Own API Key

1. Sign up at [OpenWeatherMap](https://openweathermap.org/).
2. Go to the API section and generate a new API key.
3. Replace the placeholder API key in the JavaScript file with your own key.

```javascript
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

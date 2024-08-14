# Weather App

A simple weather application that allows users to check current weather conditions and forecasts for any city around the world. Built using HTML, CSS, and JavaScript, this app fetches real-time data from a weather API and displays it in a user-friendly interface.

## Features

- **Real-time Weather Data**: Get current weather conditions including temperature, humidity, and wind speed.
- **Search by City**: Enter any city name to retrieve weather information.
- **Weather Icons**: Displays weather icons based on the current weather conditions.
- **Responsive Design**: The app is fully responsive and works well on all devices.
- **Error Handling**: Displays an error message for invalid city names or network issues.

## Demo

Check out the live demo: [Weather App Demo](https://pranay041.github.io/weatherapp/)

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/pranay041/weatherapp.git
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd weatherapp
    ```

3. **Open `index.html` in Your Browser**
    - Double-click `index.html`, or
    - Right-click and select "Open with" -> Your browser of choice.

## Usage

- **Search for a City**: Type the name of the city in the search bar and press Enter or click the search button.
- **View Weather Details**: The app displays the current temperature, weather conditions, humidity, and wind speed.
- **Switch Units**: Add functionality to switch between Celsius and Fahrenheit if desired (optional customization).

## API Integration

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

### How to Get Your Own API Key

1. Sign up at [OpenWeatherMap](https://openweathermap.org/).
2. Go to the API section and generate a new API key.
3. Replace the placeholder API key in the JavaScript file with your own key.

```javascript
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

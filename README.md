#  React Weather App

A modern, responsive weather application built with **React** and powered by the [OpenWeather API](https://openweathermap.org/api). Users can search for any city and view real-time weather data with a clean and intuitive interface.

##  Tech Stack
-  React
-  CSS / MaterialUI
-  OpenWeather API
-  Fetch API

##  Features
-  Search weather by city name
-  Display temperature, humidity, min temperature, max temperature, condition
-  Weather condition icons and descriptions
-  Responsive design for mobile and desktop

##  Getting Started

### Clone the repo
```bash
git clone https://github.com/Sanju-1114/Weather.git
```
- then go to weather folder

### Install dependencies
```bash
npm install
```

### Add your API key
- Go to src/SearchBox.jsx then change
```bash
const API_KEY = "Your API_KEY of open weather"; // create account on https://openweathermap.org/ and det your api key
```

### Start the app
```bash
npm run dev
```

##  Notes

- Make sure to enable **CORS** in your API settings if needed.
- You can switch between **metric** and **imperial** units for temperature and wind speed.

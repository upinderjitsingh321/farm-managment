import { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

function WeatherDashboard() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const inputRef = useRef();

    console.log(weather, "jj")

    const apiKey = "73026c5d784229d0572a3c97fb7a0e53"; // Replace with your actual API key

    const fetchWeather = async (city) => {
        try {
            // Fetch Current Weather
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const weatherResponse = await fetch(weatherUrl);
            const weatherData = await weatherResponse.json();
            console.log(weatherData, "checkdata")
            setWeather({
                name: weatherData.name,
                temp: weatherData.main.temp,
                humidity: weatherData.main.humidity,
                wind: weatherData.wind.speed,
                pressure: weatherData.main.pressure,
                visibility: weatherData.visibility / 1000,
                condition: weatherData.weather[0].main,
                icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            });

            // Fetch 5-Day Forecast
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();

            // Extract forecast data for the next 5 days at 12:00 PM
            const dailyForecast = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"))
                .slice(0, 5) // Get only 5 days
                .map(item => ({
                    day: new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "long" }),
                    temp: Math.round(item.main.temp),
                    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                }));

            setForecast(dailyForecast);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    useEffect(() => {
        fetchWeather("Mohali");
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4 text-primary fw-bold">Weather Dashboard</h1>
            <div className="d-flex justify-content-center gap-2 mb-4">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control w-50 border-primary"
                    placeholder="Enter city name..."
                />
                <Button variant="contained" color="primary" onClick={() => fetchWeather(inputRef.current.value)}>
                    Search
                </Button>
            </div>

            {weather && (
                <div className="text-center border rounded p-4 shadow bg-light">
                    <div className="mb-3">
                        <img src={weather.icon} alt="Weather Icon" width="80" height="80" />
                    </div>
                    <h2 className="text-dark fw-bold">{weather.name}</h2>
                    <p className="display-4 text-primary fw-bold">{Math.round(weather.temp)}°C</p>
                    <p className="text-secondary">{weather.condition}</p>
                    <div className="row mt-4">
                        <div className="col border-end">🌬 Wind: {Math.round(weather.wind)} km/h</div>
                        <div className="col border-end">💧 Humidity: {Math.round(weather.humidity)}%</div>
                        <div className="col border-end">🌡 Pressure: {Math.round(weather.pressure)} hPa</div>
                        <div className="col border-end">🔭 Visibility: {Math.round(weather.visibility)} km</div>
                    </div>
                </div>
            )}

            {forecast.length > 0 && (
                <div className="mt-5 p-3 bg-white rounded shadow-lg">
                    <h2 className="text-center text-primary fw-bold">5-Day Forecast</h2>
                    <div className="row mt-4 text-center d-flex justify-content-center">
                        {forecast.map((day, index) => (
                            <div key={index} className="col-md-2 mx-2 p-3 bg-light rounded shadow-sm border">
                                <p className="fw-bold">{day.day}</p>
                                <img src={day.icon} alt="Weather Icon" width="50" height="50" />
                                <p className="text-primary fw-bold">{day.temp}°C</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherDashboard;

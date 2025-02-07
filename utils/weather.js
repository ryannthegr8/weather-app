import axios from 'axios';

// Get the API key from environment variables
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

// Base URL for the OpenWeatherMap API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Fetch weather data for a given city
 * @param {string} city - The city name to fetch weather for
 * @returns {object} - Weather data or null if there's an error
 */
export const getWeather = async (city) => {
  try {
    // Make a GET request to the weather API
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data; // Return the weather data
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null; // Return null if there's an error
  }
};
export const URL = {
  SERVER: 'http://api.openweathermap.org/data/2.5/weather',
  SERVER_FORECAST: 'http://api.openweathermap.org/data/2.5/forecast',
  API_KEY: '876cf39fa6cd1bdda202ce044015d0e5',
}

export async function WeatherData(city) {
  const cityName = city;
  const url = `${URL.SERVER}?q=${cityName}&appid=${URL.API_KEY}&units=metric`;

  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function WeatherDataForecast(city) {
  const cityName = city;
  const url = `${URL.SERVER_FORECAST}?q=${cityName}&appid=${URL.API_KEY}&units=metric`;

  const response = await fetch(url);
  const json = await response.json();
  return json;
}
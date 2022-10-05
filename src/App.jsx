import React, { useState } from 'react'
import {FormSearch} from './components/FormSearch.jsx'
import {InfoBlock} from './components/infoBlock/infoBlock.jsx'
import {WeatherData, WeatherDataForecast} from './components/Request.jsx'



function AppWeather() {

  const [weatherData, setWeatherData] = useState({});
  const [weatherDataForecast, setWeatherDataForecast] = useState({});
  const [favCityList, setFavCityList] = useState([]);

  React.useEffect(() => console.log(favCityList));

  async function handleWeatherData(city) {
    const weatherData = await WeatherData(city);
    const weatherDataForecast = await WeatherDataForecast(city);

    setWeatherData(weatherData);
    setWeatherDataForecast(weatherDataForecast);
  }

  function handleFavCityList(city) {
    const addCity = favCityList.find(el => el.name === city);
    if(addCity) return;

    const favCity = {
      name: city,
      id: Date.now(),
    }
    setFavCityList(favCityList.concat(favCity));
  }

  function handleDelFavCity(city) {
    const newFavCityList = favCityList.filter(el => el.name !== city);
    setFavCityList(newFavCityList);
  }

  return (
    <div className="weather__wrapper">
      <FormSearch onSubmit={handleWeatherData}/>
      <InfoBlock 
        weatherData={weatherData}
        weatherDataForecast={weatherDataForecast}
        onClick={handleFavCityList}
        favCityList={favCityList}
        onClickDelFavCity={handleDelFavCity}
        onClickRenderFavCity={handleWeatherData}
      />
    </div>
  )

}



export default AppWeather;

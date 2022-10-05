
import logoFavour from '../../img/icon-favour.svg'

const URL = {
  ICON_WEATHER: 'https://openweathermap.org/img/wn/',
}

export function WeatherNow(props) {
  const {weatherData, onClick} = props;

  if(weatherData.name) {
    const iconWeather = `${URL.ICON_WEATHER}${weatherData.weather[0].icon}@4x.png`;
  
    return (
      <div id="tab_now" className="tabs__block block-1">
        <p className="temperature">{Math.round(weatherData.main.temp)}°</p>
        <div className="icon-weather">
          <img src={iconWeather} alt="Weather" className="icon-weather-img"/>
        </div>

        <div className="now-bottom">
        <h2 className="now-location">{weatherData.name}</h2>
            <button className="btn-favour" onClick={onClick}>
                <img className="icon-favour" src={logoFavour} alt="Favorites"/>
            </button>
        </div>
      </div>
  )
  } else return;
  
}



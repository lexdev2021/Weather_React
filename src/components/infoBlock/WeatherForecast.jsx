import {convertTime, convertDate} from './../convert.js'

const URL = {
  ICON_WEATHER: 'https://openweathermap.org/img/wn/',
}

export function WeatherForecast(props) {
  return (
    <div id="tab_forecast" className="tabs__block block-3">
      <CityName weatherDataForecast={props.weatherDataForecast}/>
      <ForecastList weatherDataForecast={props.weatherDataForecast.list}/>
    </div>
  )
}

function CityName(props) {
  const {weatherDataForecast} = props;

  return (
    <div className="forecast-location">
      {weatherDataForecast.city ? weatherDataForecast.city.name : ''}
    </div>
  )
}

function ForecastList(props) {
  const {weatherDataForecast} = props;

  if(weatherDataForecast) {
    const arr = weatherDataForecast.slice(0, 3);

    return (
      <div className="forecast__block-forecasts">
        {arr.map(item => 
          <ForecastListItem 
            key={item.dt}
            date={convertDate(item.dt)}
            temperature={Math.round(item.main.temp) + '°'}
            feelsLike={Math.round(item.main.feels_like) + '°'}
            time={convertTime(item.dt)}
            weather={item.weather[0].main}
            iconWeather={`${URL.ICON_WEATHER}${item.weather[0].icon}@4x.png`}
          />
        )}
      </div>
    )
  } else return null;
}

function ForecastListItem(props) {
  const {date, temperature, feelsLike, time, weather, iconWeather} = props;
  return (
    <div className="forecast-block">
      <div className="block-left">
          <div className="block-date date-block-0">{date}</div>
          <div className="block-temperature temp-block-0">Temperature: {temperature}</div>
          <div className="block-feelslike feelslike-block-0">Feels like: {feelsLike}</div>
      </div>
      <div className="block-right">
          <div className="block-time time-block-0">{time}</div>
          <div className="block-weather weather-block-0">{weather}</div>
          <div className="block-icon">
            <img className="icon-weather-forecast icon-block-0" src={iconWeather} alt="Weather"/>
          </div>
      </div>
    </div>
  )
}
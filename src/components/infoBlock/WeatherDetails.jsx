import {convertTime} from './../convert.js'

export function WeatherDetails(props) {
  const data = props.weatherData;
  if(data.name) {
    return (
      <div id="tab_details" className="tabs__block block-2">
        <h2 className="details-location">{data.name}</h2>
        <ul className="details-list">
            <li className="list-elem details-temperature">Temperature: {Math.round(data.main.temp)}°</li>
            <li className="list-elem details-feels-like">Feels like: {Math.round(data.main.feels_like)}°</li>
            <li className="list-elem details-weather">Weather: {data.weather[0].main}</li>
            <li className="list-elem details-sunrise">Sunrise: {convertTime(data.sys.sunrise)}</li>
            <li className="list-elem details-sunset">Sunset: {convertTime(data.sys.sunset)}</li>
        </ul>
      </div>
    )
  } else return null;
  
}
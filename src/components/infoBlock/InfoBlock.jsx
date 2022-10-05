import {WeatherNow} from './WeatherNow.jsx'
import {WeatherDetails} from './WeatherDetails.jsx'
import {WeatherForecast} from './WeatherForecast.jsx'
import {Tabs} from './Tabs.jsx'
import {FavCityList} from './FavCityList.jsx'


export function InfoBlock(props) {
  const {weatherData, weatherDataForecast, onClick, favCityList, onClickDelFavCity, onClickRenderFavCity} = props;

  function handleClick() {
    onClick(weatherData.name);
  }

  return (
    <div className="info-block">
      <div className="tabs">
        <WeatherNow 
          weatherData={weatherData}
          onClick={handleClick}
        />
        <WeatherDetails 
          weatherData={weatherData}
        />
        <WeatherForecast 
          weatherDataForecast={weatherDataForecast}
        />
        <Tabs />
      </div>
      <FavCityList 
        favCityList={favCityList}
        onClickDelFavCity={onClickDelFavCity}
        onClickRenderFavCity={onClickRenderFavCity}
      />
    </div>
  )
}
























import logoDelete from '../../img/delete-icon.svg'

export function FavCityList(props) {
  const {favCityList, onClickDelFavCity, onClickRenderFavCity} = props;

  return (
    <div className="weather__locations">
      <div className="added-locations">
          <h2>Added Locations:</h2>
      </div>
      <div className="list-locations">
        <FavList 
          favCityList={favCityList}
          onClickDelFavCity={onClickDelFavCity}
          onClickRenderFavCity={onClickRenderFavCity}
        />
      </div>
    </div>
  )
}

function FavList(props) {
  const {favCityList, onClickDelFavCity, onClickRenderFavCity} = props;

  return (
    favCityList.map(item =>
      <FavListItem 
        key={item.id}
        name={item.name}
        onClickDelFavCity={onClickDelFavCity}
        onClickRenderFavCity={onClickRenderFavCity}
      />
    )
  )
}

function FavListItem(props) {
  const {name, onClickDelFavCity, onClickRenderFavCity} = props;

  function handleClick() {
    onClickDelFavCity(name);
  }

  function handleClickRender() {
    onClickRenderFavCity(name);
  }

  return (
    <div className="favorite-city">
      <span className="loc-elem" onClick={handleClickRender}>{name}</span> 
      <button className="btn-delete" onClick={handleClick}> 
        <img src={logoDelete} alt="-"/> 
      </button>
    </div>
  )
}
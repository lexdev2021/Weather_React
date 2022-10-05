import {useState} from 'react'
import logoSearch from '../img/logo-search.svg'

export function FormSearch(props) {

  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e.target[0].value);
    setInputValue('');
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <form className="weather__search" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input-search" 
        placeholder="Aktobe"
        onChange={handleChange}
        value={inputValue}
      />
      <button className="btn-search">
        <img src={logoSearch} alt="Search"/>
      </button>
    </form>
  )
}


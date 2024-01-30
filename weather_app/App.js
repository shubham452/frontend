
import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch]= useState('');
  const [weather, setWeather] = useState({});

  const api={
    key:'3d222e2526fdab22663f8eb76eb01bf2',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

  const handleSearch = ()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res)=>res.json())
      .then((result)=>{
        setWeather(result);
        console.log(result);
      });
  }
  return (
    <div className='App'>
      <div className='header'>
        <h1>Weather App</h1>
      </div>
      <div className='details'>
        <input type='text'
         placeholder='Enter the city'
         onChange={(e)=>setSearch(e.target.value)}></input>
         <button onClick={handleSearch}> Submit</button>
      </div>
      <div className='output'>
      {typeof weather.main !=='undefined'?(
        <div>
        <p>{weather.name}</p>
        <p>{weather.main.temp}°C</p>
        <p>{weather.weather[0].main}</p>
        <p>{weather.weather[0].description}</p>
        </div>)
        :("")
        }
      
      </div>
    </div>
  );
}

export default App;

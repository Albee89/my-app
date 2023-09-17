import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Weatherstyles from "./weather.module.css";
import customStyles from 'styled-components';

const WeatherInformation = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'ef572e62024121dfaba6b28ca69eae3f',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <div className={Weatherstyles.WeatherInformation}>
    <div className='WeatherInformation'></div>
    <div id='Weather Information'></div>
    <h2>Local Weather</h2>

  
    <ReactWeather
     theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Berlin"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />

    
    </div>
    
  );
};

export default WeatherInformation;
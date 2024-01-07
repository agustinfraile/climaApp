import { IProps } from './types';



const CardWeather = ({data} : IProps) => {
  // console.log(data.cities?.cityWeather)

  const nameCity = data.cities?.cityWeather.name;
  const weatherCity = data.cities?.cityWeather.weather;
  const minWeather = data.cities?.cityWeather.weather_min;
  const maxWeather = data.cities?.cityWeather.weather_max;

  return (
    <div>
        <h1>{nameCity}</h1>
        <h3>{weatherCity}</h3>
        <h3>{minWeather}</h3>
        <h3>{maxWeather}</h3>
    </div>
  )
}

export default CardWeather
import { IProps } from './types';

import styles from './CardWeather.module.css';



const CardWeather = ({data} : IProps) => {
  // console.log(data.cities?.cityWeather)

  const nameCity = data.cities?.cityWeather.name;
  const weatherCity = data.cities?.cityWeather.weather;
  const minWeather = data.cities?.cityWeather.weather_min;
  const maxWeather = data.cities?.cityWeather.weather_max;

  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardContainer_icon}>

        </div>

        <div className={styles.cardContainer_titles}>
          <h1>{nameCity}</h1>
          <h3>{weatherCity}</h3>
        </div>

        {/* <div className={styles.cardContainer_weatherInfo}></div> */}

        <div className={styles.cardContainer_weathers}>
          <h3>{minWeather}</h3>
          <h3>{maxWeather}</h3>
        </div>
    </div>
  )
}

export default CardWeather
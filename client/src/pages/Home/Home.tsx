import { SearchWeather } from '../../components/SearchWeather/SearchWeather';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home_container}>
        <div className={styles.home_container__search}>
            <SearchWeather />   
        </div>

        <div className={styles.home_container__content}>

        </div>
    </section>
  )
}

export default Home
import { SearchWeather } from "../../components/SearchWeather/SearchWeather";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../state/types";
import CardWeather from "../../components/CardWeather/CardWeather";
import styles from "./Home.module.css";

const Home = () => {
  
  const state = useSelector((state: IStore) => state);

  console.log(state);

  return (
      <section className={styles.home_container}>
          <div className={styles.home_container__search}>
              <SearchWeather />
          </div>

          <div className={styles.home_container__content}>
            <CardWeather 
              data = {state}
            />
          </div>
      </section>
  );
};

export default Home;

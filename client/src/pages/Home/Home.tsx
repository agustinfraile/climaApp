import { SearchWeather } from "../../components/SearchWeather/SearchWeather";
import { useSelector } from "react-redux";
import { IStore } from "../../state/types";
import CardWeather from "../../components/CardWeather/CardWeather";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  
  const state = useSelector((state: IStore) => state);

  
  const [valueState, setValueState] = useState(undefined);

  useEffect(() => {
    setValueState(state.cities?.cityWeather.name)
    console.log(valueState)
  }
  , [valueState, state.cities?.cityWeather.name])


  return (
      <section className={styles.home_container}>
          <div className={styles.home_container__search}>
              <SearchWeather />
          </div>

        {
          valueState === undefined ?
          <></>
          : (

            <div className={styles.home_container__content}>
            <CardWeather 
              data = {state}
              />
            </div>
          )
        }
      </section>
  );
};

export default Home;

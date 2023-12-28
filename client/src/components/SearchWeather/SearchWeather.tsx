import { useState } from 'react';
import styles from './SearchWeather.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../state/types';

export const SearchWeather = () => {
  

  const dispatch = useDispatch();
  const state = useSelector((state: IStore) => state);

  console.log(state)

  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };


  return (
    <form>
        <input 
          className={styles.home_container__search__input}
          placeholder="Ingrese una ciudad..."
          type="text"
          value={value} 
          onChange={handleInputChange}
        />
        <button
          className={styles.home_container__search__button}
          type="submit"
        >
            Buscar
        </button>
    </form>
  )
}

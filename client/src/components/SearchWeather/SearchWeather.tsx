import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { onGetCities } from '../../state/cities/citiesActions';

import iconSearch from "../../assets/images/icons/busqueda.png";

import styles from './SearchWeather.module.css';
import { IProps } from './types';

export const SearchWeather = ({valueState}: IProps) => {


  const dispatch = useDispatch();
  


  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if(value.trim().length >= 1) {
      dispatch(onGetCities(value));
    } else {
      alert('Ingrese una ciudad');
    }

    setValue('');
  }


  return (
    <>
      <form className={styles.formContainer}>

        
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
            onClick={handleSubmit}
          >            
            <img src={iconSearch} alt="buscar" />
          </button>
          


      </form>


      {/* form wrap */}
      <form className={styles.formContainer_wrap}>

        <input 
              className={styles.home_container__search__input_wrap}
              placeholder="Ingrese una ciudad..."
              type="text"
              value={value} 
              onChange={handleInputChange}
        />

        <button
          className={styles.home_container__search__button_wrap}
          type="submit"
          onClick={handleSubmit}
          >
            <img src={iconSearch} alt="buscar" />
        </button>

      </form>
    </>
  )
}

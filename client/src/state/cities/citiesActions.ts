import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { ON_GET_CITIES_FAILED, ON_GET_CITIES_SUCCEEDED } from "./citiesConstants";
import { getCities, getCityWeather } from "./citiesServices";
import { ICity } from "./types";


export const onGetCities = (city: string) => async (dispatch: Dispatch<AnyAction>) => {
    const response = await getCityWeather(city);
    if (response) {
        dispatch(onGetCitiesSucceeded(response));
    } else {
        dispatch(onGetCitiesFailed());
    }
}


export const onGetCitiesSucceeded = (cityWeather: ICity[]) => ({
    type: ON_GET_CITIES_SUCCEEDED,
    cityWeather,
});

export const onGetCitiesFailed = () => ({
    type: ON_GET_CITIES_FAILED,
});
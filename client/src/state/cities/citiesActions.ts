import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { ON_GET_CITIES_FAILED, ON_GET_CITIES_SUCCEEDED } from "./citiesConstants";
import { getCities } from "./citiesServices";
import { ICity } from "./types";


export const onGetCities = () => async (dispatch: Dispatch<AnyAction>) => {
    const response = await getCities();
    if (response) {
        dispatch(onGetCitiesSucceeded(response));
    } else {
        dispatch(onGetCitiesFailed());
    }
}


export const onGetCitiesSucceeded = (cities: ICity[]) => ({
    type: ON_GET_CITIES_SUCCEEDED,
    cities,
});

export const onGetCitiesFailed = () => ({
    type: ON_GET_CITIES_FAILED,
});
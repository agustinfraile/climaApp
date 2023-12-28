import { ON_GET_CITIES_FAILED, ON_GET_CITIES_SUCCEEDED } from "./citiesConstants";

const initialState = {
    cities: [],
    error: false,
};

export default (state = initialState, action: any) => {
    switch (action.type) {

        case ON_GET_CITIES_SUCCEEDED:
            return {
                ...state,
                cities: action.cities,
            };
        case ON_GET_CITIES_FAILED:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

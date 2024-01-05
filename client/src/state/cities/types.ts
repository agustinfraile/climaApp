export interface ICity {
    coord: {
        lon: number;
        lat: number;
    };
    weather: string;
    weather_min: number;
    weather_max: number;
    wind: number;
    clouds: number;
    name: string;
    img: string;
    id: number;
}

export interface ICityData {
    cities: ICity[];
}

export interface ICityState {
    cities: null | ICityData[];
    error: boolean;
}
import { ICityState } from "./cities/types";

export interface IAPIResponse {
    status: number;
    data?: object;
}

export interface IStore {
    cities: ICityState;
}
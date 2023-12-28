import { ICityState } from "./cities/types";

export interface IAPIResponse {
    success: boolean;
    status: number;
    message?: string;
    data?: object;
}

export interface IStore {
    cities: ICityState;
}
export interface ICity {
    id: number;
    name: string;
    country: string;
    description: string;
    image: string;
}

export interface ICityState {
    cities: ICity[];
    loading: boolean;
    error: string;
}
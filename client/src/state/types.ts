export interface IAPIResponse {
    success: boolean;
    status: number;
    message?: string;
    data?: object;
}
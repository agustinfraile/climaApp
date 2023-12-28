import axios from "axios";


export const getCities = async () => {
    const requestConfig = {
        headers: {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*",
            "mode": "no-cors"
        },
    };

    const url = `http://localhost:3001/weather`;
    const response = await axios.get(url, requestConfig);
    return response.data;
}

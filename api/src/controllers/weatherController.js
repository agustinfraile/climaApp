const axios = require("axios");
const { API_KEY } = process.env;
const { URL } = process.env;

// Funcion para traer el clima de una ciudad

const getWeatherByCity = async (city) => {
    const url = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);

        const cityWeather = {
            coord: response.data.coord,
            weather: response.data.weather[0].main,
            weather_min: response.data.main.temp_min,
            weather_max: response.data.main.temp_max,
            wind: response.data.wind.speed,
            clouds: response.data.clouds.all,
            lon: response.data.coord.lon,
            lat: response.data.coord.lat,
            name: response.data.name,
            img: response.data.weather[0].icon,
            id: response.data.id,
        };

        return cityWeather;
    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener el clima de la ciudad");
    }
};

module.exports = {
    getWeatherByCity,
};

const { Router } = require("express");
const { getWeatherByCity } = require("../controllers/weatherController");


const router = Router();

router.get("/weather", async (req, res) => {
    const city = req.query;
    
    try {

        if(!city) {
            return res.status(400).json({message: "No se ha enviado ninguna ciudad"});
        }

        const citySelected = await getWeatherByCity(city);
        console.log(citySelected);
        return res.status(200).json(citySelected);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al obtener el clima de la ciudad"});      
    }
});

module.exports = router;
const axios = require("axios");
config = require("../config/index");
exports.getWeather = () => {
  config = require("../config/index");
  console.log(config);
  return axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${config.weatherAPIKey}`
  );
};

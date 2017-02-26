// Load axios
// function to return module
// call axios to fetch the Weather

var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=c73c7f12ad6da38694a31235450ab487&units=metric';


module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                var parametros = {
                    temp: res.data.main.temp,
                    description: res.data.weather[0].description,
                    country: res.data.sys.country

                };
                return parametros;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }


}

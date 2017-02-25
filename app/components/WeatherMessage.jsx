var React = require('react');

var WeatherMessages = ({temp, description, country, location} ) => {
    
    return (
        <div>
            <h1>Localização: {location}</h1>
            <span>Pais: {country}</span>
            <h4>Temperatura: {temp}°C </h4>
            <h5>Descrição: {description}  </h5>
        </div>

    );
};



module.exports = WeatherMessages;

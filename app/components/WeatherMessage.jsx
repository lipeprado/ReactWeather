var React = require('react');

var WeatherMessages = ({temp, description, country, location} ) => {

    return (
        <div className="container-message">
            <ul className="list">
            <li className="text-center list-message">Localização:<h4 className="text-center" >{location}</h4></li>
            <li className="text-center list-message">Pais;<h4 className="text-center"> {country}</h4></li>
            <li className="text-center list-message">Temperatura:<h4 className="text-center"> {temp}°C </h4></li>
            <li className="text-center list-message">Descrição:<h4 className="text-center"> {description}  </h4></li>
            </ul>
        </div>

    );
};



module.exports = WeatherMessages;

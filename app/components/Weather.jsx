var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined

        });

        openWeatherMap.getTemp(location).then(function(parametros){
            that.setState({
                location: location,
                temp: parametros.temp,
                description: parametros.description,
                country: parametros.country,
                isLoading: false
            });

        }, function(errorMessage){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });


    },

  render: function () {
      var { isLoading, temp, country, description, location, errorMessage } = this.state;

      function renderMessage(){
          if (isLoading) {
              return <p className="text-center">Carregando...</p>;
          } else if(temp && description && country && location){
              return <WeatherMessage location={location} description={description} country={country}  temp={temp}/>;
          }
      }

      function renderError(){
          if (typeof errorMessage === 'string') {
              return(
                  <ErrorModal/>
              )
          }
      }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}

      </div>
    )
  }
});

module.exports = Weather;

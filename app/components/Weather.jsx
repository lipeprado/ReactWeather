var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(parametros){
            that.setState({
                location: location,
                temp: parametros.temp,
                description: parametros.description,
                country: parametros.country,
                isLoading: false
            });

        }, function(errorMessage){
            that.setState({isLoading: false});
            alert('Cidade não Existe', errorMessage)
        });


    },

  render: function () {
      var { isLoading, temp, country, description, location } = this.state;

      function renderMessage(){
          if (isLoading) {
              return <p>Carregando...</p>;
          } else if(temp,description, location){
              return <WeatherMessage location={location} description={description} country={country}  temp={temp}/>;
          }
      }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;

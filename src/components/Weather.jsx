import React from 'react';

const Weather = (props) => {
  return (
    <div>
        {props.city ? (
          <div>
            <p>
              Location : {props.city} {props.country}
            </p>
            <p>Temperature: {props.temperature} ºC</p>
            <p>Description: {props.description}</p>
            <p>Humidity: {props.humidity} %</p>
          </div>
        ) : null
        }{
          props.error && <p>{props.error}</p> 
        }
      </div>
  );
};

export default Weather;
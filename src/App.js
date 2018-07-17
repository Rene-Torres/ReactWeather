import React, { Component } from 'react';
import Titles from "./components/Titles";
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css'
import Icon from './components/icon'

const API_KEY = `${process.env.REACT_APP_API_KEY}` //Replace for valid Api key from https://openweathermap.org/city/3521081
class App extends Component {


  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  }

  getWeather = (e) => {
    e.preventDefault()
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    fetch(url)

      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (city && country) {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          })
        } else {
          this.setState({
            temperature: "",
            city: "",
            country: "",
            humidity: "",
            description: "",
            error: "Please Enter a valid City"
          })
        }

      })
      .catch(err => console.log('no jalo', err))



  }

  render() {
    return ( <div className = "container" >

      <Titles/>
      <Form getWeather = {
        this.getWeather
      }
      /> <Weather temperature = {
        this.state.temperature
      }
      city = {
        this.state.city
      }
      country = {
        this.state.country
      }
      humidity = {
        this.state.humidity
      }
      description = {
        this.state.description
      }
      error = {
        this.state.error
      }
      />
      
      <Icon/> 
      </div>
    )
  }
}

export default App;
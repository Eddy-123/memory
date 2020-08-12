import React, { Component } from "react";

export default class About extends Component {
  state = {
    city: "",
    weather: ""
  };
  //Arrow fx for binding
  handleSubmit = (event) => {
    event.preventDefault();
    const { city } = this.state;
    let apiRequest = new XMLHttpRequest();
    apiRequest.onreadystatechange = () => {
      if (apiRequest.status === 404) {
        this.setState({
          weather: "Sorry, '" + city + "' is not recognized by the service"
        });
      } else if (apiRequest.readyState === 4) {
        const response = JSON.parse(apiRequest.response);
        this.setState({
          weather:
            "The weather in " +
            response.name +
            " is " +
            response.weather[0].description +
            "."
        });
      }
    };
    apiRequest.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e"
    );
    apiRequest.send();
  };

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  };
  render() {
    return (
      <div>
        <h2>The weather</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter your city"
            value={this.state.city}
            onChange={this.handleInputChange}
            type="text"
          />
          <button type="submit">WHEATHER</button>
        </form>
        {this.state.weather !== "" && <p>{this.state.weather}</p>}
      </div>
    );
  }
}

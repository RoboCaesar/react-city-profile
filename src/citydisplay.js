import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCloud } from '@fortawesome/free-solid-svg-icons'
import {apikey} from './apikey.json';

library.add(faCheckSquare, faCoffee, faCloud);

function giveDirection(degrees) {
    let adjustedDegrees = degrees + 11.25; //Adjusting the degrees makes it easier to get the direction.
    if (adjustedDegrees > 360) adjustedDegrees -= 360;
    let directions = [
        'N', 'NNE', 'NE',
        'ENE', 'E', 'ESE',
        'SE', 'SSE', 'S',
        'SSW', 'SW', 'WSW',
        'W', 'WNW', 'NW', 'NNW'
    ];

    let directionIndex = Math.floor(adjustedDegrees/22.50);

    return directions[directionIndex];
}

export class CityData extends React.Component {
    constructor() {
        console.log("Hello!!!");
        super();
        this.state= {
            currentCity: "Ho Chi Minh City",
            error: null,
            isLoaded: false,
            cityData: [],
        }
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=ho%20chi%20minh%20city&appid=' + apikey)
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    cityData: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );

    }
    render() {
        const { error, isLoaded, cityData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading Weather Data....</div>;
        } else {
            return (
                <div>
                    <form>
                        <input type="text" placeholder="Enter a city here"/>
                    </form>
                    <h3>Current conditions in: {cityData.name}, Vietnam</h3>
                    <div className="same-line">
                        <table>
                            <tbody>
                            <tr>
                                    <td>
                                        <FontAwesomeIcon icon="cloud" className="weather-icon"/>
                                    </td>
                                    <td>                
                                        <p className="temperature">{cityData.main.temp - 273.15}</p>
                                        <p>°C</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="other-info">
                        <table id="weather-table">
                            <tbody>
                                <tr>
                                    <td>Barometric pressure</td>
                                    <td>{cityData.main.pressure} mb/hPa</td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{cityData.main.humidity}%</td>
                                </tr>
                                <tr>
                                    <td>Wind speed</td>
                                    <td>{cityData.wind.speed} km/h</td>
                                </tr>
                                <tr>
                                    <td>Wind direction</td>
                                    <td>{cityData.wind.deg} -> {giveDirection(cityData.wind.deg)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}
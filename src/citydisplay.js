import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCloud } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faCloud);

export class CityData extends React.Component {
    constructor() {
        super();
        this.state= {
            error: null,
            isLoaded: false,
            cityData: [],
        }
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=ho%20chi%20minh%20city&appid=29efb2fd25250f99dcc58c4a48c87ccb')
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
                    <h3>Current conditions in: {cityData.name}, Vietnam</h3>
                    <div className="same-line">
                        <table>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon="cloud" className="weather-icon"/>
                                </td>
                                <td>                
                                    <p className="temperature">{cityData.main.temp - 273.15}</p>
                                    <p>°C</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="other-info">
                        <p>Barometric pressure: {cityData.main.pressure} mb/hPa</p>
                        <p>Humidity: {cityData.main.humidity}%</p>
                        <p>Wind speed: {cityData.wind.speed} km/h</p>
                        <p>Wind direction: NNW or something </p>

                    </div>
                </div>
            );
        }
    }
}
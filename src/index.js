import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCloud } from '@fortawesome/free-solid-svg-icons'

import './index.css';
import {GetCityData} from './getcitydata.js';

library.add(faCheckSquare, faCoffee, faCloud);

//Component for basic city info
function CityProfile(props) {
    return (
        <div>
            <h3>Current conditions in: {props.name}, {props.state}</h3>
            <div className="same-line">
                <table>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon="cloud" className="weather-icon"/>
                        </td>
                        <td>                
                            <p className="temperature">72</p>
                            <p>°F</p>
                        </td>
                    </tr>
                </table>
            </div>
            {/* <h3 className="text-format">{props.description}</h3> */}
        </div>
    );
}

//The main component
class WeatherInterface extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="page-appearance">
                <h1 className="title">instantWeather</h1>
                <form>
                    <input type="text" placeholder="Enter a city here"/>
                </form>
                <CityProfile
                    name={cityInfo.name}
                    state={cityInfo.state}
                    population={cityInfo.population}
                    description={cityInfo.description}
                />
                <GetCityData />
            </div>
        );
    }
}

const cityInfo = {
    name: "Seattle",
    state: "Washington",
    population: '724,725',
    description: "Seattle is a city located in the Pacific Northwest region of the United States of America. It is famous for many reasons."
}

ReactDOM.render(
    // <div>
    //     <ActionButton />
    //     <CityProfile
    //         name={cityInfo.name}
    //         state={cityInfo.state}
    //         population={cityInfo.population}
    //         description={cityInfo.description}
    //     />
    // </div>,
    <WeatherInterface />,
    document.getElementById('root')
  );
import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import {CityData} from './citydisplay.js';


//Component for basic city info
// function CityProfile(props) {
//     return (
//         <div>
//             <h3>Current conditions in: {props.name}, {props.state}</h3>
//             <div className="same-line">
//                 <table>
//                     <tr>
//                         <td>
//                             <FontAwesomeIcon icon="cloud" className="weather-icon"/>
//                         </td>
//                         <td>                
//                             <p className="temperature">72</p>
//                             <p>°F</p>
//                         </td>
//                     </tr>
//                 </table>
//             </div>
//             {/* <h3 className="text-format">{props.description}</h3> */}
//         </div>
//     );
// }

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
                <CityData />
            </div>
        );
    }
}

ReactDOM.render(
    <WeatherInterface />,
    document.getElementById('root')
  );
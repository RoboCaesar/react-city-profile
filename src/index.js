import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCloud } from '@fortawesome/free-solid-svg-icons'

import './index.css';
library.add(faCheckSquare, faCoffee, faCloud);


// const request = require('request');

// request('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });

// const loadScript = function(src) {
//     var tag = document.createElement('script');
//     tag.async = false;
//     tag.src = src;
//     document.getElementsByTagName('body').appendChild(tag);
// }

//Component for basic city info
function CityProfile(props) {
    return (
        <div>
            <FontAwesomeIcon icon="cloud" className="title"/>
            <h1>{props.name}, {props.state}</h1>
            <h2>Population: {props.population}</h2>
            <h3 className="text-format">{props.description}</h3>
        </div>
    );
}

//Search functionality component
class ActionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }

    render() {
        return (
            <div>
                <h3>The button has been pressed {this.state.clicks} times.</h3>
                <button type="button" onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

//The main component
class WeatherInterface extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-appearance">
                <h1 className="title">instantWeather</h1>
                <h4>Made by Thomas with React in 2018</h4>
                <CityProfile
                    name={cityInfo.name}
                    state={cityInfo.state}
                    population={cityInfo.population}
                    description={cityInfo.description}
                />
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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function cityProfile(props) {
    return (
        <div>
            <h1>{props.name}, {props.state}</h1>
            <h2>Population: {props.population}</h2>
            <h3 class="text-format">{props.description}</h3>
        </div>
    );
}

const cityInfo = {
    name: "Seattle",
    state: "Washington",
    population: '724,725',
    description: "Seattle is a city located in the Pacific Northwest region of the United States of America. It is famous for many reasons."
}

ReactDOM.render(
    cityProfile(cityInfo),
    document.getElementById('root')
  );
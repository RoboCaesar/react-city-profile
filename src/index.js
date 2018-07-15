import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CityProfile(props) {
    return (
        <div>
            <h1>{props.name}, {props.state}</h1>
            <h2>Population: {props.population}</h2>
            <h3 className="text-format">{props.description}</h3>
        </div>
    );
}

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

const cityInfo = {
    name: "Seattle",
    state: "Washington",
    population: '724,725',
    description: "Seattle is a city located in the Pacific Northwest region of the United States of America. It is famous for many reasons."
}

ReactDOM.render(
    <div>
        <ActionButton />
        <CityProfile
            name={cityInfo.name}
            state={cityInfo.state}
            population={cityInfo.population}
            description={cityInfo.description}
        />
    </div>,
    document.getElementById('root')
  );
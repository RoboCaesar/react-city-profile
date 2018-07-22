import React from 'react';

export class GetCityData extends React.Component {
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
                    <p>{cityData.name}</p>
                </div>
            );
        }
    }
}

//module.exports = {GetCityData: GetCityData};
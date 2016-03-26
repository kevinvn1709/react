import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends React.Component {
    render() {
        return (
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Map</th>
                    <th>Temperature (C)</th>
                    <th>Pressure (hPA)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={_.uniqueId()}>
                <td>{name}</td>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart data={temps} color="red" unit="&deg;C"/>
                </td>
                <td>
                    <Chart data={pressures} color="blue" unit="hPA"/>
                </td>
                <td>
                    <Chart data={humidities} color="orange" unit="%"/>
                </td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);
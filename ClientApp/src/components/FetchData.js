import React, { Component } from "react";

export class FetchData extends Component {
    displayName = FetchData.name;

    constructor(props) {
        super(props);

        if (!props.forecasts.length) {
            props.loadForecast();
        }
    }

    static renderForecastsTable(forecasts, loadForecast) {
        return (
            <>
                <button onClick={loadForecast}>Refresh</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temp. (C)</th>
                            <th>Temp. (F)</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecasts.map(forecast => (
                            <tr key={forecast.dateFormatted}>
                                <td>{forecast.dateFormatted}</td>
                                <td>{forecast.temperatureC}</td>
                                <td>{forecast.temperatureF}</td>
                                <td>{forecast.summary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }

    render() {
        let contents = this.props.loadingForecast ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
            FetchData.renderForecastsTable(this.props.forecasts, this.props.loadForecast)
        );

        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}

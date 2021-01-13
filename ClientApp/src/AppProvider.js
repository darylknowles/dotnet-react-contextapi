import React, { Component } from "react";

export const AppContext = React.createContext();

export class AppProvider extends Component {
    
    //Breaking the state object up for readability
    counterState = {
        currentCount: 0,
        incrementCounter: () => {
            this.setState(prevState => {
                return {
                    currentCount: prevState.currentCount + 1
                };
            });
        },
        decrementCounter: () => {
            this.setState(prevState => {
                return {
                    currentCount: prevState.currentCount - 1
                };
            });
        }
    };

    forecastState = {
        forecasts: [],
        loadingForecast: false,
        loadForecast: () => {
            fetch("api/SampleData/WeatherForecasts")
                .then(response => response.json())
                .then(data => {
                    this.setState({ forecasts: data, loadingForecast: false });
                });
        }
    };

    //Now pull everything together in state
    state = {
        ...this.counterState,
        ...this.forecastState    
    };

    render() {
        return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
    }
}

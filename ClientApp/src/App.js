import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";

export default class App extends Component {
    displayName = App.name;

    render() {
      
        let { currentCount, incrementCounter, decrementCounter, forecasts, loadingForecast, loadForecast } = {
            ...this.props
        };

        return (
            <Layout>
                <Route exact path="/" component={Home} />
                <Route
                    path="/counter"
                    render={() => <Counter {...{ currentCount, incrementCounter, decrementCounter }} />}
                />
                <Route
                    path="/fetchdata"
                    render={() => <FetchData {...{ forecasts, loadingForecast, loadForecast }} />}
                />
            </Layout>
        );
    }
}

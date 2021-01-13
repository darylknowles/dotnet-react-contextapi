import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { AppProvider, AppContext } from "./AppProvider";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
    <AppProvider>
        <AppContext.Consumer>
            {context => (
                <BrowserRouter basename={baseUrl}>
                    <App {...context}/>
                </BrowserRouter>
            )}
        </AppContext.Consumer>
    </AppProvider>,
    rootElement
);

registerServiceWorker();
